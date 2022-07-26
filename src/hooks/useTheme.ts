import { useEffect, useState } from "react";

export type Theme  ={
    bgColor: string;
    textColor: string;
}

enum WhiteLabelClient {
    TELLA = 'tella',
    EIGHTFOLD = 'eightfold',
}

const themes:Record<WhiteLabelClient, Theme> = {
    tella: {
        bgColor: "red",
        textColor: "black",
    },
    eightfold: {
        bgColor: "green",
        textColor: "darkseagreen",
    },
}

export const useTheme = (): Theme & {theme : Theme} => {
    const [subDomain] = useState<WhiteLabelClient>(window.location.hostname.split(".")[0] as WhiteLabelClient);
    const [theme, setTheme] = useState<Theme>(themes['tella']);

    useEffect(() => {
        setTheme(themes[subDomain] || themes[WhiteLabelClient.TELLA]);
    }, [subDomain])

    const {bgColor, textColor} = theme;

    return { theme, bgColor, textColor };
}
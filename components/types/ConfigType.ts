import { Color } from "../../statics/Color";

export namespace ConfigType {
    export enum Toast {
        InformationToast = 'InformationToast',
        ErrorToast = 'ErrorToast'
    }

    export interface FontType {
        fontSize: number,
        color: Color,
        letterSpacing: number,
        lineHeight: number,
        fontFamily: string
    }

    export enum OsType {
        Aos = 'aos',
        Ios = 'ios',
    }
}
export type TNamesQuestion = "info" | "skills" | "job" | "photo" | "education" | "experience"

export type TStateQuestion = "wait" | "success" | "error";
export interface IPropsTask1Test {
    answers: {
        text: string,
        isWin: boolean,
        info: string
    }[],
    stateAnswer: TStateQuestion,
    stateUserArr: number[],
    funcCheckUserAnswer: (arr: number[]) => void
    user?: number
}

export interface ICheckSection {
    info: boolean;
    skills: boolean;
    job: boolean;
    photo: boolean;
    education: boolean;
    experience: boolean;

}


export const arrNameQuestion = ["info", "job", "photo", "education", "experience", "skills"]
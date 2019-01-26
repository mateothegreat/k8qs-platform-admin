export class QuestionType {

    public static readonly BOOLEAN: string = 'BOOLEAN';
    public static readonly SINGLE_CHOICE: string = 'SINGLE_CHOICE';
    public static readonly MULTIPLE_CHOICE: string = 'MULTIPLE_CHOICE';
    public static readonly NUMBER: string = 'NUMBER';

    public static TYPES: Array<QuestionType> = [

        QuestionType.BOOLEAN,
        QuestionType.SINGLE_CHOICE,
        QuestionType.MULTIPLE_CHOICE,
        QuestionType.NUMBER

    ];

}

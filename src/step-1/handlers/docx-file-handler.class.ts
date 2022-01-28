import { Handler } from "../../handler.interface";

export class DocxHandler implements Handler {
    private nextHandler!: Handler;

    handle(fileName: string): void {
        console.log(`Hi, I am ${Object.getPrototypeOf(this).constructor.name}`);

        if (fileName.endsWith('.docx')) {
            console.log('I am running MS Word... I pass file to it.');
        } else if (this.nextHandler) {
            console.log(`I can not process ${fileName}. I pass it to the next ${Object.getPrototypeOf(this.nextHandler).constructor.name}`);
            this.nextHandler.handle(fileName);
        } else {
            console.log(`No Handler for ${fileName}`);
        }
    }

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }
}
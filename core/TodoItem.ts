class TodoItem {
    private rawText: string;
    private displayHtml: string;
    //commandList: Array<ICommand>;
    constructor(rawText: string) {
        this.rawText = rawText;
        this.displayHtml = "<div>" + rawText+ "</div>";
    }

    /*
		getters,setters, and modifers of TodoItem properties
    */
    public getRawText(){
    	return this.rawText;
    }

    public getDisplayHtml(){
    	return this.displayHtml;
    }

    public setRawText(rawText: string){
    	this.rawText = rawText;
    }

    public addToRawText(textToAdd: string){
    	this.rawText+=textToAdd;
    }

    public setDisplayHtml(newHtml: string){
    	this.displayHtml = newHtml;
    }

    public addToDisplayHtml(newHtml: string){
    	this.displayHtml+=newHtml;
    }


}
export {TodoItem};
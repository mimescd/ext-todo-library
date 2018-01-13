import { suite, test, slow, timeout } from "mocha-typescript";
import {TodoItem} from "../output/TodoItem";
var assert = require('assert');
describe("TodoItem basics", () => {
    it("should be instantiated correctly", () => {
    	let testText = "some todo text";
    	let todo = new TodoItem(testText);
    	
    	assert.equal(todo.getRawText(), testText);
    	assert.equal(todo.getDisplayHtml(), "<div>" + testText + "</div>");
    });
    it("should use getters and setters properly", ()=>{
    	let testText = "some todo text";
    	let newTestText = "this some new shit now b";
    	let newHtml = "<div>aw fuck ye</div>";
    	let todo = new TodoItem(testText);
    	
    	todo.setRawText(newTestText);
    	todo.setDisplayHtml(newHtml);
    	assert.equal(todo.getRawText(), newTestText);
    	assert.equal(todo.getDisplayHtml(), newHtml);
    });
    it("should append html and raw text correctly", ()=>{
    	let testText = "some todo text";
    	let newTestText = "this some new shit now b";
    	let newHtml = "<div>aw fuck ye</div>";
    	let todo = new TodoItem(testText);
    	let currentHtml = todo.getDisplayHtml();
    	
    	todo.appendRawText(newTestText);
    	todo.appendDisplayHtml(newHtml);
    	assert.equal(todo.getRawText(), testText+newTestText);
    	assert.equal(todo.getDisplayHtml(), currentHtml+newHtml);

    });
});
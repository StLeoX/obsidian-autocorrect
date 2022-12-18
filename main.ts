import { App, Editor, Plugin } from "obsidian";
const autocorrect = require("autocorrect-node");

export default class AutoCorrect extends Plugin {
	async onload() {
		this.addCommand({
			id: "auto-correct",
			name: "autocorrect",
			callback() {
				// todo
			},
		});
	}

	async onunload() {}
}

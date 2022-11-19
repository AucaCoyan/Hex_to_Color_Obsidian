import {
	ViewUpdate,
	PluginValue,
	EditorView,
	ViewPlugin,
} from "@codemirror/view";
import { Notice } from "obsidian";

class _DocumentHighlight implements PluginValue {
	// this method runs every time you load the plugin
	constructor(view: EditorView) {
		new Notice("Plugin Reloaded");
	}

	// this method runs when something has changed (i.e. user input text or select text)
	update(update: ViewUpdate) {
		new Notice("You are updating the document");
	}
}

export const DocumentHighlight = ViewPlugin.fromClass(_DocumentHighlight);

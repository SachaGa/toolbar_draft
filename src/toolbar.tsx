import React, { useState, useEffect } from "react";
//import { EditorState } from "draft-js";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createInlineToolbarPlugin from "draft-js-inline-toolbar-plugin";
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
} from "draft-js-buttons";

import "draft-js/dist/Draft.css";
import "draft-js-inline-toolbar-plugin/lib/plugin.css";
//import "./style.css";
const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

const CustomInlineToolbar = () => {
  const [editorState,setEditorState] = useState(createEditorStateWithText(text))

  useEffect(() => {
    setEditorState(editorState);
  })


  return (
    <div>
      <div className="editorStyles">
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        plugins={plugins}
      />
      <InlineToolbar>
        {
          (externalProps: JSX.IntrinsicAttributes) => (
            <>
                <ItalicButton {...externalProps} />
                <BoldButton {...externalProps} />
                <UnderlineButton {...externalProps} />
            </>
          )
        }
</InlineToolbar>
        </div>
      </div>
    );
}

export default CustomInlineToolbar;
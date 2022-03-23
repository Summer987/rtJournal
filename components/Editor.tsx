import React, {useEffect} from "react";
import EditorJS from "@editorjs/editorjs";


export const Editor: React.FC = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст вашей статьи'
    })

    return () => {
      editor.isReady.then(() => {
        editor.destroy()
      }).catch(e => console.log('Error editor cleanup', e))
    }
  },[])

  return (
    <div id='editor'>

    </div>
  )
}
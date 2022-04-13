import React, {useEffect} from "react";
import EditorJS, {OutputData} from "@editorjs/editorjs";

interface EditorProps {
  onChange: (blocks: OutputData['blocks']) => void
  initialBlock: OutputData['blocks']
}

export const Editor: React.FC<EditorProps> = ({onChange, initialBlock}) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      data: {
        blocks: initialBlock
      },
      placeholder: 'Введите текст вашей статьи',
      async onChange() {
        const { blocks } = await editor.save()
        onChange( blocks )
      }

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
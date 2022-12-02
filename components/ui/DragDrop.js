import React, { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'

const DragDrop = () => {
  const { useState } = React
  const [files, setFile] = useState([])
  const [message, setMessage] = useState()
  const handleFile = (e) => {
    setMessage('')
    let file = e.target.files

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]['type']
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]])
      } else {
        setMessage('only images accepted')
      }
    }
  }
  const removeImage = (i) => {
    setFile(files.filter((x) => x.name !== i))
  }

  return (
    <div className="md:w-full w-[360px] rounded-md">
      <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">
        {message}
      </span>
      <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer   border-gray-400 border-dotted">
        <input
          type="file"
          onChange={handleFile}
          className="h-full w-full opacity-0 z-10 absolute"
          multiple="multiple"
          name="files[]"
        />
        <div className="h-full w-full  absolute z-1 flex justify-center items-center top-0">
          <div className="flex flex-col">
            <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
            <span className="text-[12px]">{`Drag and Drop a file`}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {files.map((file, key) => {
          return (
            <div
              key={key}
              className="w-full h-16 flex items-center justify-between rounded p-3 bg-gray-200 text-black"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="h-12 w-12 ">
                  <img
                    className="w-full h-full rounded"
                    src={URL.createObjectURL(file)}
                  />
                </div>
                <span className="truncate w-44">{file.name}</span>
              </div>
              <div
                onClick={() => {
                  removeImage(file.name)
                }}
                className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm"
              >
                <span className="text-white">X</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DragDrop

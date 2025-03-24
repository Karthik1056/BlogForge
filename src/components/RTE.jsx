// import { Editor } from '@tinymce/tinymce-react'
// import React from 'react'
// import { Controller } from 'react-hook-form'
// export default function RTE({ name, control, label, defaultValue = "" }) {
//     return (
//         <div className='w-full'>
//             {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

//             <Controller
//                 name={name || "Content"}
//                 contorl={control}

//                 // render and controller is used say i have a form that is used to edit or upload the article that i am uploading so if there is any change that i need to do to my article i need to call the the tiny mce to the editor to be displayed so that i can edit the article so field is passed by the component and onchange the Editor from the tiny mce should to visisble that y we use controller from react foem hook to controll the form 


//                 render={({ field: { onChange } }) => (
//                     <Editor
//                         initialValue={defaultValue}
//                         init={{
//                             initialValue: defaultValue,
//                             height: 500,
//                             menubar: true,
//                             plugins: [
//                                 "image",
//                                 "advlist",
//                                 "autolink",
//                                 "lists",
//                                 "link",
//                                 "image",
//                                 "charmap",
//                                 "preview",
//                                 "anchor",
//                                 "searchreplace",
//                                 "visualblocks",
//                                 "code",
//                                 "fullscreen",
//                                 "insertdatetime",
//                                 "media",
//                                 "table",
//                                 "code",
//                                 "help",
//                                 "wordcount",
//                                 "anchor",
//                             ],
//                             toolbar:
//                                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//                             content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
//                         }}
//                         onEditorChange={onChange}
//                     />
//                 )}
//             />
//         </div>
//     )
// }


import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <Editor

            apiKey='2av7askbkim228ci0k2snzjdckpp3lvaz3vwaxdkfkrv4l38'
            
            value={value || ""}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={(value) => {
              onChange(value); // Updates react-hook-form
            }}
          />
        )}
      />
    </div>
  );
}

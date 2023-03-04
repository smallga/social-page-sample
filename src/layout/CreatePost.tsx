import { useCallback, useEffect, useRef, useState } from "react";
import { ReactComponent as NewPost } from '../assets/icon/circle-add.svg'
import { ReactComponent as CameraGrey } from '../assets/icon/camera-grey.svg'

interface CreatePostProps {
  show: boolean;
  handleClose: Function;
}
export default function CreatePost(props: CreatePostProps) {

  const { show } = props;

  const [modalShow, setModalShow] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setCloseTimeout = useCallback(() => {
    setTimeout(() => { setModalShow(false);  setPreviewImage('');}, 300)
  }, [])


  const closeModal = () => {
    const { handleClose } = props;
    if (handleClose) {

      handleClose();
    }
  }

  useEffect(() => {
    if (show) {
      setModalShow(true);
    }
    else {
      setCloseTimeout();
    }
  }, [show])

  const clickFileInput = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewImage(String(reader.result));
      };
    }
  };

  return (
    <>
      {
        modalShow && <>
          <div aria-label="modal-background" className="fixed top-0 left-0 w-full h-full z-createPost bg-opacity-40 bg-slate-800 md:py-8" onClick={closeModal}>
            <div aria-label="post-modal-content" className={`mx-auto h-[calc(100%-3rem)]  ${show ? 'xs:animate-transformUp lg:animate-pulseIn' : 'xs:animate-transformDown xs:translate-y-full lg:animate-pulseOut lg:scale-[0.25]'}`}>
              <div aria-label="post-modal-content" className="max-w-[568px] w-full h-full px-4 bg-white py-2 overflow-y-auto mx-auto flex flex-col sm:rounded-md" onClick={(e) => { e.stopPropagation() }}>
                <h2>發佈貼文</h2>
                <div className="h-[250px] mt-2 flex items-center justify-center bg-slate-200 rounded-lg cursor-pointer duration-300 relative hover:brightness-90" onClick={clickFileInput}>
                  <CameraGrey className="h-16 w-16" />
                  <input ref={fileInputRef} type="file" accept="image/jpeg, image/png" className="absolute top-1/2 invisible" onChange={handleFileInputChange} />
                  {previewImage &&
                    <div className="absolute top-0 left-0 h-full w-full rounded-md bg-white">
                      <img className="h-full w-full object-contain rounded-md" src={previewImage} alt="preview" />
                    </div>
                  }
                </div>
                <textarea className="flex-1 w-full mt-2 text-left" placeholder="請輸入貼文內容...">

                </textarea>
                <button className="h-12 w-full bg-slate-600 text-white font-bold text-lg tracking-widest rounded-md">
                  發佈貼文
                </button>
              </div>
            </div>
          </div>
          <div className="fixed left-1/2 bottom-1 h-10 w-10 -translate-x-1/2 z-[150] bg-white rounded-full lg:hidden">
            <NewPost className={`w-10 h-10 ${show ? 'animate-ratate45Clockwise rotate-45' : 'animate-ratate45ConterClockwise rotate-0'}`} onClick={closeModal} />
          </div>
        </>
      }
    </>
  )
}
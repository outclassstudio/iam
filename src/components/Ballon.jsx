import "assets/base.css";

export const Ballon = ({children,text,title,button}) => {
  return (
    <div className='ballon_wrap'>
      <div className="content_wrap">
            {children}
      </div>
      <div className="title_wrap">
        {title}
      </div>
      <div className='ballon'>
          {text}
      </div>
      <div className="btn_wrap">
        {button}
      </div>
    </div>
  )
}

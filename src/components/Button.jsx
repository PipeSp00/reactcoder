
    
export const Button = ({ onClick,  children, clase}) => (
    <button className={clase} onClick={onClick} >
    {children} 
    </button>
  );
 
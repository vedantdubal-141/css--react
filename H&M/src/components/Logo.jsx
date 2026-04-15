const Logo = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.8 19.2V4.8h3.2v6.4h4.8V4.8h3.2v14.4h-3.2v-6.4H8v6.4H4.8zm17.6-1.6q-1.2 1.6-3.2 1.6-2 0-3.2-1.6t-1.2-4q0-2.4 1.2-4t3.2-1.6q2 0 3.2 1.6l-1.6 1.6q-0.8-0.8-1.6-0.8-1.2 0-1.6 1.6-0.4 0.8-0.4 1.6s0.4 1.6 0.4 1.6q0.4 1.6 1.6 1.6 0.8 0 1.6-0.8l1.6 1.6zm4.8 1.6V4.8h3.2l2.4 7.2 2.4-7.2h3.2v14.4h-3.2V8.8l-2.4 7.2h-1.6l-2.4-7.2v10.4h-1.6z" />
    </svg>
  );
};

export default Logo;

const PageLinkItem = ({ href, itemClass, text }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default PageLinkItem;

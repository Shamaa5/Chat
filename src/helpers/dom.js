export const scroll = () => {
  if (document.getElementById('scroll_page')) {
    const message = document.getElementById('scroll_page');
    message.scrollTop = message.scrollHeight;
  }
};
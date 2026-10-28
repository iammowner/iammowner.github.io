const filters = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
  let count = 0;
  items.forEach(item => {
    item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    if (!item.hidden && item.classList.contains('work-item')) count++;
  });
  document.querySelector('.filter-status').textContent = `${button.textContent.trim()}: ${count}개 항목`;
}));
document.getElementById('year').textContent = new Date().getFullYear();

// Load the YouTube player only when the visitor chooses a video.
document.querySelectorAll('.video-play').forEach(button => {
  button.addEventListener('click', () => {
    const holder = button.closest('.video-frame');
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${holder.dataset.video}?autoplay=1&rel=0`;
    frame.title = button.getAttribute('aria-label');
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    frame.allowFullscreen = true;
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    holder.replaceChildren(frame);
  });
});

document.addEventListener('keydown', function (e) {
  if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.isComposing) return;
  var t = e.target;
  if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  var rel = { ArrowLeft: 'prev', ArrowRight: 'next', Escape: 'up' }[e.key];
  var a = rel && document.querySelector('a[data-nav="' + rel + '"]');
  if (!a) return;
  e.preventDefault();
  if (rel === 'up' && document.referrer === a.href) history.back();
  else location.href = a.href;
});

(function(){
  const btn = document.getElementById('downloadBtn');
  const svg = document.getElementById('plan');
  if (!btn || !svg) return;

  btn.addEventListener('click', () => {
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svg);
    if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
      source = source.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if(!source.match(/^<svg[^>]+xmlns\:xlink="http\:\/\/www\.w3\.org\/1999\/xlink"/)){
      source = source.replace('<svg', '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    const url = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(source);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ground-floor-plan.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
})();

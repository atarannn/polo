function audioHandler($button, $audio) {
    $button.classList.add('paused');
    $button.addEventListener('click',function(evt){
        evt.stopPropagation();
        $button.classList.toggle('playing'); 
        $button.classList.toggle('paused');
        if ($audio.paused) {
            $audio.play();
            return;
        }
        if (!$audio.paused) {
            $audio.pause();
            return;
        }
    });
}

audioHandler(document.querySelector('[data-panorama-play]'), document.querySelector('audio'))
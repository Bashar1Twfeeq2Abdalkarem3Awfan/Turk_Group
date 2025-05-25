const playBtn = document.getElementById('playBtn');
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('closeBtn');
  const video = document.getElementById('myVideo');

  function openModal() {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    video.play();
  }

  function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    video.pause();
    video.currentTime = 0;
  }

  playBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  playBtn.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  });
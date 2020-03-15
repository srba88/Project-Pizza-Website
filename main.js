

// panel
const cardPanel = document.querySelectorAll('.card');
const panels = document.querySelectorAll('.row-panel');
const panelContainer = document.querySelector('#panel-container');
const closePanels = document.querySelectorAll('.close-panel');

cardPanel.forEach( card => {
    card.addEventListener('click', e => {
        if(e.target.tagName === 'IMG'){
            const targetPanel = document.querySelector(e.target.dataset.target)
            panels.forEach( panel => {
                if(panel === targetPanel){
                    panelContainer.style.display = 'block';
                    panel.classList.add('active');
                }else{
                    closePanels.forEach( closePanel => {
                        closePanel.addEventListener('click', e => {
                            if(e.target.className === 'close-panel'){
                                panelContainer.style.display = 'none';
                                panel.classList.remove('active');
                            }
                        });
                    });
                }
            });
        }
    });
});
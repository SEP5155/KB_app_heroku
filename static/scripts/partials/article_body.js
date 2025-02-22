document.addEventListener('DOMContentLoaded', () => {
    const articleBody = document.querySelector('.article_section');

    const subMenuItem = document.querySelectorAll('.subtopic-item');
    const nestedMenuItem = document.querySelectorAll('.netsted_menu_item');

    // const filteredTopics = Array.from(new Map(guidesData.map(item => [item.technology, item])).values());
    // console.log(filteredTopics);

    // Обработчик кликов для подменю
    nestedMenuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation(); // Остановить всплытие события
            console.log('Submenu item clicked:', item.dataset.id);
        });
    });
    subMenuItem.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation(); // Остановить всплытие события
            console.log('Submenu item clicked:', item.dataset.id);
        });
    });

    nestedMenuItem.forEach(item => {
        item.addEventListener('click', () => {
        const id = item.getAttribute('data-id');
        let selectedData;
        let topic;
        
        if (item.parentElement.parentElement.parentElement.parentElement.id === 'guides') {
            selectedData = guidesData.find(guide => guide._id === id);
            topic = 'guides'
        } else if (item.parentElement.parentElement.parentElement.parentElement.id === 'responses') {
            selectedData = responsesData.find(response => response._id === id); 
            topic = 'responses'
        }

        if(selectedData && topic === 'guides') {
            articleBody.innerHTML = `
            <div class="breadcrumps">
                <span class="breadcrumps__title"><h2>${selectedData.technology}</h2></span>
                <hr>
            </div>
            <div class="article_part purpose"><span>Purpose:</span><br><span>${selectedData.purpose}</span></div>
            <div class="article_part command"><span>Command:</span><br><span>${selectedData.command}</span></div>
            <div class="copy-container">
                <button class="copy-btn" data-target="textToCopy">
                    <img src="../pictures/copy_icon.png" alt="Copy" />
                </button>
            </div>
            <div class="article_part example"><span>Example:</span><br><span>${selectedData.example}</span></div>
            <div class="article_part comments"><span>Comments:</span><br><span>${selectedData.comments}</span></div>
            `
        } else if (selectedData && topic === 'responses') {
            articleBody.innerHTML = `
            <div class="breadcrumps">
                <span class="breadcrumps__title"><h2>${selectedData.subCategory}</h2></span>
                <hr>
            </div>
            <div class="article_part topic">${selectedData.topic}</div>
            <div class="article_part text">${selectedData.text}</div>
            `
        }
    })
    })
})
const markAsRead = document.querySelector('.read');
const articles = document.querySelectorAll('.messages-container');
const notifications = document.querySelector('.notifications');
let sum = 3;

markAsRead.addEventListener('click', () =>
{
    for(let article of articles)
    {
        if(article.classList.contains('unread'))
        {
            article.classList.remove('unread');
            notifications.innerHTML = '0';
            sum = 0;
        }
    }
});

for(let article of articles)
{
    article.addEventListener('click', () => 
    {
        
        if(!article.classList.contains('unread'))
        {
            article.classList.add('unread');
            sum++;
            console.log(sum);
            notifications.innerHTML = sum;
        }
        else
        {
            article.classList.remove('unread');
            sum--;
            notifications.innerHTML = sum;
        }
    })
    
}
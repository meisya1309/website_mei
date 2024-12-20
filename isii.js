const profileDiv = document.getElementById('profile');

// Function to create HTML elements safely
function createElement(tagName, attributes = {}, textContent = null) {
  const element = document.createElement(tagName);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function appendElements(parent, elements) {
    elements.forEach(el => parent.appendChild(el));
}

const biodata = [
  { tag: 'ol', type: '1', items: ['Nim : 241011700633', 'Nama : Meisya Putri Maulidina', 'Kelas : 01SIFP016'] },
  { tag: 'ul', type: 'circle', items: ['Program Studi : Sistem Informasi', 'Alamat : Tangerang Selatan', 'Asal Sekolah : MAN 2 LEBAK'] },
  { tag: 'ol', type: 'I', items: ['Jurusan : MIPA', 'Email : meisyaputrimaulidina@gmail.com', 'Telepon : 085691326024'] }
];

//Build the profile section dynamically
const h1 = createElement('h1', { align: 'center' }, 'WEBSITE Profile ');
const pinkSpan = createElement('span', { class: 'pink-text' }, 'Meisya Putri Maulidina');
h1.appendChild(pinkSpan);
const img = createElement('img', { src: 'meisyapm.jpeg', alt: 'foto saya', onError: 'this.src="placeholder.jpg"' }); // Added error handling
const hr = createElement('hr', { width: '110%', style: 'border-color:pink;' }); //Use style attribute for color
const copyright = createElement('p', { align: 'center' }, 'Design by Meisya Putri Maulidina &copy; 2024 AllRight Reserved');


const elementsToAppend = [hr, h1, hr, img];
appendElements(profileDiv, elementsToAppend);

biodata.forEach(item => {
  const list = createElement(item.tag, { type: item.type });
  item.items.forEach(text => {
    const listItem = createElement('li');
    listItem.textContent = text;
    list.appendChild(listItem);
  });
  profileDiv.appendChild(list);
});

const elementsToAppend2 = [hr, copyright, hr];
appendElements(profileDiv, elementsToAppend2);


// Add CSS for styling
const style = document.createElement('style');
style.innerHTML = `
  .pink-text {
    color: pink;
  }
`;
document.head.appendChild(style);
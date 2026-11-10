/**
 * WHERE IS MY DRAWING?
 * 방 탐색 및 그림 아카이브
 */

// ============================================================
// 01. 방 데이터
// ============================================================

const ROOM_DATA = {
    bedroom: {
        number: '01',
        name: 'LIVING & BEDROOM',
        src: 'img/bedroom.jpg',
        preview: 'img/bedroom.jpg',
        full: true,
        items: [
            {
                id: 'cat',
                x: 32.8,
                y: 65,
                name: 'My loverly cat',
                category: 'CAT',
                title: 'My loverly cat',
                desc: 'My loverly cat is sleeping on the chair. I love my cat.',
                image: 'img/art/cat.jpg'
            },
            // {
            //     id: 'frame',
            //     x: 53.7,
            //     y: 29.5,
            //     name: '벽에 걸린 액자',
            //     category: 'DRAWING',
            //     title: '그림을 찾아낸 사람',
            //     desc: '오래된 그림을 다시 보면, 그때의 내가 조금 보일까요?',
            //     sample: true
            // },
            // {
            //     id: 'window',
            //     x: 34.6,
            //     y: 37.6,
            //     name: '노을이 드는 창',
            //     category: 'LANDSCAPE',
            //     title: '창밖을 오래 보던 날',
            //     desc: '풍경을 바라보다 마음에 오래 남은 장면을 다시 꺼내 봅니다.'
            // },
            // {
            //     id: 'plant',
            //     x: 55,
            //     y: 62.5,
            //     name: '작은 화분',
            //     category: 'BOTANICAL',
            //     title: '이름도 모르는 식물',
            //     desc: '작은 잎 하나에도 유난히 눈길이 가던 날이 있었습니다.'
            // },
            // {
            //     id: 'bed',
            //     x: 72,
            //     y: 48.5,
            //     name: '높은 침대',
            //     category: 'EVERYDAY',
            //     title: '아무것도 하지 않는 시간',
            //     desc: '아무것도 하지 않는 시간도 그림으로 남길 수 있을까요?'
            // },
            // {
            //     id: 'person',
            //     x: 47.5,
            //     y: 68.9,
            //     name: '방 안의 나',
            //     category: 'SELF',
            //     title: '그림을 찾고 있는 사람',
            //     desc: '그림을 찾으러 왔다가, 그 앞에 서 있는 나를 발견합니다.'
            // }
        ]
    },

    garden: {
        number: '02',
        name: 'GARDEN',
        src: 'img/garden.jpg',
        preview: 'img/garden.jpg',
        full: false,
        items: [
            // {
            //     id: 'tree',
            //     x: 44,
            //     y: 34,
            //     // name: '정원의 나무',
            //     category: 'NATURE',
            //     title: '나무를 바라보는 시간',
            //     desc: '자연을 관찰하며 그린 기록.'
            // },
            // {
            //     id: 'flowers',
            //     x: 25,
            //     y: 77,
            //         name: '꽃과 화분',
            //     category: 'BOTANICAL',
            //     title: '작은 식물들의 기록',
            //     desc: '식물을 그릴 때 발견했던 모양과 색.'
            // },
            // {
            //     id: 'path',
            //     x: 68,
            //     y: 72,
            //     name: '정원의 길',
            //     category: 'TRAVEL',
            //     title: '길을 따라 걷다가',
            //     desc: '산책에서 Discovered Drawings의 단서.'
            // }
        ]
    },

    kitchen: {
        number: '03',
        name: 'KITCHEN',
        src: 'img/kitchen.jpg',
        preview: 'img/kitchen.jpg',
        full: false,
        items: [
            // {
            //     id: 'table',
            //     x: 46,
            //     y: 62,
            //     // name: '식탁',
            //     category: 'STILL LIFE',
            //     title: '일상의 작은 정물',
            //     desc: '늘 곁에 있던 사물을 바라보는 연습.'
            // },
            // {
            //     id: 'cabinet',
            //     x: 27,
            //     y: 39,
            //     // name: '주방 선반',
            //     category: 'OBJECT',
            //     title: '평범한 물건의 표정',
            //     desc: '일상의 사물에서 발견한 형태.'
            // },
            // {
            //     id: 'window',
            //     x: 72,
            //     y: 29,
            //     // name: '주방의 창',
            //     category: 'LANDSCAPE',
            //     title: '식탁에 내려앉는 빛',
            //     desc: '빛과 그림자를 기록합니다.'
            // }
        ]
    },

    work: {
        number: '04',
        name: 'STUDIO',
        src: 'img/work.jpg',
        preview: 'img/work.jpg',
        full: false,
        items: [
            // {
            //     id: 'desk',
            //     x: 68,
            //     y: 69,
            //     name: '작업 책상',
            //     category: 'SKETCH',
            //     title: '책상 위에 남겨진 그림',
            //     desc: '오래된 스케치와 새로 시작한 작업.'
            // },
            // {
            //     id: 'shelf',
            //     x: 27,
            //     y: 61,
            //     name: '책장',
            //     category: 'ARCHIVE',
            //     title: '오래된 그림 묶음',
            //     desc: '잊어버렸던 그림들을 꺼내 봅니다.'
            // },
            // {
            //     id: 'frame',
            //     x: 42,
            //     y: 29,
            //     name: '작업실 벽의 액자',
            //     category: 'ILLUSTRATION',
            //     title: '벽에 걸어 둔 그림',
            //     desc: '완성된 그림과 완성되지 않은 질문.'
            // }
        ]
    }
};

// ============================================================
// 02. 공통 설정 및 상태
// ============================================================

const ROOM_ORDER = ['bedroom', 'garden', 'kitchen', 'work'];
const STORAGE_KEY = 'missing-drawing-discovery-v2';

let discoveries = {};

try {
    discoveries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {};
} catch (error) {
    console.warn('발견 기록을 불러올 수 없습니다.', error);
}

// URL의 ?room= 값으로 현재 방을 선택합니다.
const params = new URLSearchParams(window.location.search);
const requestedRoom = params.get('room') || 'bedroom';
const roomId = ROOM_DATA[requestedRoom] ? requestedRoom : 'bedroom';
const room = ROOM_DATA[roomId];

document.body.dataset.room = roomId;

// 모든 방의 작품을 하나의 목록으로 만듭니다.
const allItems = ROOM_ORDER.flatMap(id =>
    ROOM_DATA[id].items.map((item, index) => ({
        ...item,
        roomId: id,
        roomName: ROOM_DATA[id].name,
        key: `${id}:${item.id}`,
        file: `${ROOM_DATA[id].number}-${String(index + 1).padStart(2, '0')}`
    }))
);

// ============================================================
// 03. 공통 유틸리티 및 발견 기록
// ============================================================

const $ = id => document.getElementById(id);

function el(tag, className = '', text = '') {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (text) element.textContent = text;

    return element;
}

function persist() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(discoveries));
    } catch (error) {
        console.warn('저장할 수 없습니다.', error);
    }
}

function readCount() {
    return Object.keys(discoveries).filter(key => discoveries[key]).length;
}

function roomCount(id) {
    return ROOM_DATA[id].items.filter(item => discoveries[`${id}:${item.id}`]).length;
}

// 카운터가 HTML에서 주석 처리되어 있어도 오류 없이 동작합니다.
function updateCount() {
    const counts = {
        foundCount: readCount(),
        totalCount: allItems.length,
        roomCount: roomCount(roomId),
        roomTotal: room.items.length
    };

    Object.entries(counts).forEach(([id, value]) => {
        const element = $(id);

        if (element) {
            element.textContent = String(value).padStart(2, '0');
        }
    });

    document.querySelectorAll('.hotspot').forEach(button => {
        button.classList.toggle(
            'found',
            !!discoveries[`${roomId}:${button.dataset.id}`]
        );
    });
}

function selectTab(tab) {
    document.querySelectorAll('[data-action]').forEach(button => {
        button.classList.toggle('active', button.dataset.action === tab);
    });
}

function heading(label, title, subtitle = '') {
    const wrap = el('div', 'dialog-heading');

    wrap.append(
        el('span', 'eyebrow', label),
        el('h2', '', title)
    );

    if (subtitle) {
        wrap.append(el('p', '', subtitle));
    }

    return wrap;
}

// ============================================================
// 04. 우측 패널 및 중앙 팝업
// ============================================================

function closeSideDrawer() {
    const panel = $('sideDrawer');

    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    selectTab('');
}

function openSideDrawer(title, subtitle, view) {
    closeOverlay();

    const panel = $('sideDrawer');

    $('sideDrawerTitle').textContent = title;
    $('sideDrawerSubtitle').textContent = subtitle;
    $('sideDrawerContent').replaceChildren(view);

    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    $('closeSideDrawer').focus({ preventScroll: true });
}

function openOverlay(view) {
    closeSideDrawer();

    const overlay = $('overlay');

    overlay.hidden = false;
    overlay.classList.add('is-open');
    document.body.classList.add('modal-open');
    $('overlayContent').replaceChildren(view);
    $('closeOverlay').focus();
}

function closeOverlay() {
    const overlay = $('overlay');

    overlay.classList.remove('is-open');
    overlay.hidden = true;
    document.body.classList.remove('modal-open');
    selectTab('');
}

// ============================================================
// 05. 작품 상세 및 발견 목록
// ============================================================

function artworkCard(item) {
    const button = el('button', 'art-card');
    button.type = 'button';

    button.append(el('span', 'art-card-file', `FILE ${item.file}`));

if (item.image) {
    const image = el('img');
    image.src = item.image;
    image.alt = item.title;
        button.append(image);
    } else {
        const empty = el('div', 'placeholder-art');
        empty.append(
            el('span', '', 'DRAWING FILE'),
            el('strong', '', item.category),
            el('small', '', '작품 이미지 준비 중')
        );
        button.append(empty);
    }

    button.append(
        el('strong', 'art-card-title', item.title),
        el('span', 'art-card-sub', `${item.roomName} · ${item.name}`)
    );

    button.addEventListener('click', () => showArt(item, false));
    return button;
}

function showArt(item, discover = true) {
    if (discover) {
        discoveries[item.key] = true;
        persist();
        updateCount();
    }

    selectTab('');

    const view = el('div', 'art-view');
    view.append(
        heading(
            `FOUND DRAWING / FILE ${item.file}`,
            item.title,
            // `${item.roomName} / ${item.name}`
        )
    );

const art = el('div', 'art-frame');

if (item.image) {
    const image = el('img');
    image.src = item.image;
    image.alt = item.title;

    art.append(image);
} else {
    art.append(
        el('span', 'art-empty-kicker', 'ARTWORK IMAGE'),
        el('strong', 'art-empty-title', 'Artwork coming soon.')
    );
}

    view.append(art);
    view.append(el('p', 'art-description', item.desc));

    const meta = el('div', 'art-meta');
    meta.append(
        el('span', '', `FILE ${item.file} / ${item.category}`),
        el('span', '', discoveries[item.key] ? 'DISCOVERED' : 'ARCHIVE')
    );
    view.append(meta);

    const back = el('button', 'full-button', 'Go back');
    back.addEventListener('click', closeOverlay);
    view.append(back);

    openOverlay(view);
}

function showArchive() {
    selectTab('archive');

    const view = el('div', 'archive-view');
    view.append(
        heading(
            ' ',
            'Discovered Drawings',
            'Drawings you have discovered while exploring the rooms.'
        )
    );

    const found = allItems.filter(item => discoveries[item.key]);
    const counter = el(
        'p',
        'archive-counter',
        `${String(found.length).padStart(2, '0')} / ${String(allItems.length).padStart(2, '0')} FILES DISCOVERED`
    );
    view.append(counter);

    if (!found.length) {
        view.append(
            el('div', 'empty-state', 'No drawings discovered yet.')
        );
    } else {
        const grid = el('div', 'art-grid');
        found.forEach(item => grid.append(artworkCard(item)));
        view.append(grid);
    }

    openSideDrawer('Discovered Drawings', 'DISCOVERED FILES', view);
}

// ============================================================
// 06. Explore Rooms / ABOUT THE PROJECT / SEARCH JOURNAL
// ============================================================

function showRooms() {
    selectTab('rooms');

    const view = el('div', 'rooms-view');
    view.append(heading(' ', 'Explore Rooms', 'Which room would you like?'));

    const grid = el('div', 'room-grid');

    ROOM_ORDER.forEach(id => {
    const currentRoom = ROOM_DATA[id];
    const link = el('a', 'room-card');
    link.href = `index.html?room=${id}`;

    const image = el('img');
    image.src = currentRoom.preview;
    image.alt = currentRoom.name;

    link.append(image);
    link.append(
        el('strong', '', currentRoom.name),
        el('small', '', `${roomCount(id)} / ${currentRoom.items.length} found`)
    );
    grid.append(link);
});
    view.append(grid);

    if (ROOM_ORDER.some(id => !ROOM_DATA[id].full)) {
        view.append(
            el(
                'p',
                'preview-note',
               
            )
        );
    }

    openSideDrawer('Explore Rooms', ' ', view);
}

// function showAbout() {
//     const view = el('div', 'text-view');
//     view.append(
//         heading(' ', '어디 갔어, 내 그림?', 'THE MISSING DRAWING ARCHIVE')
//     );

//     [
//         '그림은 많이 그렸는데, 정작 내 그림은 어디 있을까요?',
//         '그동안 그렸던 그림을 하나씩 꺼내어 살펴보고, 그림에 얽힌 일상과 기억을 기록합니다.',
//         '이 웹사이트는 그림을 찾아가는 과정과 그림들이 모인 아카이브입니다.'
//     ].forEach(text => view.append(el('p', 'about-paragraph', text)));

//     const back = el('button', 'full-button', 'SEARCH JOURNAL로 돌아가기');
//     back.addEventListener('click', showJournal);
//     view.append(back);

//     openSideDrawer('ABOUT THE PROJECT', 'ABOUT THE PROJECT', view);
// }


function showAbout() {
    const view = el('div', 'text-view about-view');

    // 01. ABOUT THE PROJECT
    view.append(
        heading(' ', 'WHERE IS MY DRAWING', ' ')
    );

    const intro = el('div', 'about-intro');

    [
    "I've drawn so many pictures,\n but where is my own style?",
    "I'm revisiting my old drawings, one by one, and collecROOM DIRECTORYting the stories and memories behind them.",
    "This website is an archive of my drawings and my journey to find my own style."
    ].forEach((text, index) => {
        intro.append(
            el('p', `about-paragraph${index === 0 ? ' is-lead' : ''}`, text)
        );
    });

    view.append(intro);

    // 02. 작가 소개
    const author = el('section', 'about-section');

    author.append(
        el('span', 'about-section-label', 'ABOUT THE AUTHOR'),
        el('h3', 'about-section-title', 'FOUNDER & ILLUSTRATOR'),
    );

    [
        'I work as a web designer and front-end developer, and I also draw.',
    "Over the years, I've explored different mediums, including pencil drawing, watercolor, and architectural sketching.",
    "I'm currently building a personal archive of my past and new work."
    ].forEach(text => {
        author.append(el('p', 'about-paragraph', text));
    });

    view.append(author);

    // 03. 외부 링크
    const elsewhere = el('section', 'about-section');

    elsewhere.append(
        el('span', 'about-section-label', 'ELSEWHERE')
    );

    const links = el('div', 'about-links');

    const socialLinks = [
        {
            name: 'Blog',
            url: 'https://lionbum.tistory.com/'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/lionflower_draw/'
        }
    ];

    socialLinks.forEach(({ name, url }) => {
        const link = el('a', 'about-link');

        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        link.append(
            el('span', 'about-link-name', name),
            el('span', 'about-link-arrow', '→')
        );

        links.append(link);
    });

    elsewhere.append(links);
    view.append(elsewhere);


    // 05. 돌아가기
    const back = el(
        'button',
        'full-button about-back',
        'BACK TO SEARCH JOURNAL'
    );

    back.addEventListener('click', showJournal);
    view.append(back);

    openSideDrawer('ABOUT THE PROJECT', ' ', view);
}



function showJournal() {
    selectTab('journal');

    const view = el('div', 'journal-view');
    view.append(heading(' ', 'SEARCH JOURNAL', 'Notes on finding my drawings and building this website.'));

    const aboutButton = el('button', 'journal-link');
    aboutButton.append(
        el('span', '', 'ABOUT THE PROJECT'),
        el('span', '', '→')
    );
    aboutButton.addEventListener('click', showAbout);
    view.append(aboutButton);

    const entries = [
        
          [
            'commits 3',
            '2026.11.10',
            'Finally, I\'ve finished building my website and uploaded it to GitHub! Now all I have to do is find my old drawings and upload them.'
        ],
         [
            'commits 2',
            '2026.11.07',
            'I used AI to create the initial version, then reviewed and reworked the design and functionality to complete it in my own style.'
        ],
        [
            'commits 1',
            '2026.11.04',
            'Before I started drawing, I decided to find my own picture. I decided to create a website to upload and store the pictures I found.'
        ]
       
    ];

    entries.forEach(([number, title, description]) => {
        const entry = el('article', 'journal-entry');
        entry.append(
            el('span', 'eyebrow', `${number}`),
            el('span', 'date', title),
            el('p', '', description)
        );
        view.append(entry);
    });

    view.append(
        el('p', 'preview-note', 'This Search Journal began in November 2026.')
    );

    openSideDrawer('SEARCH JOURNAL', ' ', view);
}

// ============================================================
// 07. 방 이미지 / 핫스팟 / 드래그 및 확대·축소
// ============================================================

function initScene() {
    // 방 이름과 이미지
    $('roomName').textContent = room.name;
    $('roomEnglish').textContent = `ROOM ${room.number}`;
    $('roomSubtitle').textContent = roomId === 'bedroom'
        ? 'Stories are hidden in everyday objects.'
        : 'Stories are hidden in everyday objects.';

    const image = $('roomImage');
    image.src = room.src;
    image.alt = `${room.name} 아이소메트릭 미니어처 공간`;

    if (!room.full) {
        $('previewPill').hidden = false;
        image.classList.add('low-res');
    }

    const scene = $('scene');
    const viewport = $('viewport');

    // 드래그 및 확대·축소 상태
    let zoom = 1;
    let panX = 0;
    let panY = 0;
    let drag = null;
    let activePointerId = null;
    let wasDragged = false;

    // 방 안의 클릭 가능한 그림 위치 생성
    room.items.forEach(item => {
        const button = el('button', 'hotspot');
        button.type = 'button';
        button.dataset.id = item.id;
        button.style.left = `${item.x}%`;
        button.style.top = `${item.y}%`;
        button.setAttribute('aria-label', `${item.name} 탐색`);
        // button.append(el('span', 'hotspot-label', item.name));

        button.addEventListener('click', event => {
            event.stopPropagation();

            if (!wasDragged) {
                const artwork = allItems.find(entry => entry.key === `${roomId}:${item.id}`);
                showArt(artwork);
            }
        });

        scene.append(button);
    });

    updateCount();

    // 이미지의 현재 확대·이동 상태를 CSS 변수로 전달
    function transform() {
        scene.style.setProperty('--zoom', zoom);
        scene.style.setProperty('--panx', `${panX}px`);
        scene.style.setProperty('--pany', `${panY}px`);
    }

    function reset() {
        zoom = 1;
        panX = 0;
        panY = 0;
        transform();
    }

    // 확대·축소 버튼
    $('zoomIn').onclick = () => {
        zoom = Math.min(2.5, zoom + 0.2);
        transform();
    };

    $('zoomOut').onclick = () => {
        zoom = Math.max(0.7, zoom - 0.2);
        transform();
    };

    $('zoomReset').onclick = reset;

    // 마우스 휠로 확대·축소
    viewport.addEventListener('wheel', event => {
        if (!$('overlay').hidden) return;

        event.preventDefault();
        zoom = Math.max(
            0.7,
            Math.min(2.5, zoom + (event.deltaY < 0 ? 0.1 : -0.1))
        );
        transform();
    }, { passive: false });

    // 드래그 시작
    viewport.addEventListener('pointerdown', event => {
        if (
            event.button !== 0 ||
            event.target.closest('.hotspot') ||
            activePointerId !== null
        ) return;

        event.preventDefault();
        activePointerId = event.pointerId;
        drag = {
            x: event.clientX,
            y: event.clientY,
            px: panX,
            py: panY
        };
        wasDragged = false;

        viewport.setPointerCapture(event.pointerId);
        viewport.classList.add('dragging');
        scene.classList.add('dragging');
    });

    // 드래그 이동
    viewport.addEventListener('pointermove', event => {
        if (!drag || activePointerId !== event.pointerId) return;

        const dx = event.clientX - drag.x;
        const dy = event.clientY - drag.y;

        if (Math.abs(dx) + Math.abs(dy) > 6) {
            wasDragged = true;
        }

        panX = drag.px + dx;
        panY = drag.py + dy;
        transform();
    });

    // 드래그 종료
    function endDrag(event) {
        if (
            activePointerId === null ||
            (event && event.pointerId !== activePointerId)
        ) return;

        const id = activePointerId;
        drag = null;
        activePointerId = null;

        viewport.classList.remove('dragging');
        scene.classList.remove('dragging');

        if (viewport.hasPointerCapture(id)) {
            viewport.releasePointerCapture(id);
        }

        setTimeout(() => {
            wasDragged = false;
        }, 0);
    }

    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('lostpointercapture', endDrag);

    transform();
}

// ============================================================
// 08. 이벤트 연결 및 초기화
// ============================================================

function init() {
    initScene();

    const actions = {
        archive: showArchive,
        journal: showJournal,
        rooms: showRooms
    };

    document.querySelectorAll('[data-action]').forEach(button => {
        button.addEventListener('click', () => {
            actions[button.dataset.action]?.();
        });
    });

    $('closeOverlay').addEventListener('click', closeOverlay);
    $('closeSideDrawer').addEventListener('click', closeSideDrawer);

    $('overlay').addEventListener('click', event => {
        if (event.target === $('overlay')) {
            closeOverlay();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            if (!$('overlay').hidden) {
                closeOverlay();
            } else {
                closeSideDrawer();
            }
        }
    });
}

init();

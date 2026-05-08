// Список товаров Dota 2 Store
const products = [
    {
        id: 1,
        name: "Arcana Juggernaut",
        price: 3500,
        image: "https://collectorsshop.ru/_next/image?url=https%3A%2F%2Fcollectorsshop.ru%2Fimg%2Fcatalog%2Fitems%2Fmain_images%2F2020%2F01%2F223_1.jpeg&w=1920&q=30",
        description: "Легендарная аркана для Juggernaut с уникальными эффектами",
        fullDescription: "Arcana для Juggernaut полностью меняет внешний вид героя. Добавляет новые анимации атак, особые эффекты способностей и кастомные фразы.",
        rarity: "Arcana",
        hero: "Juggernaut",
        icon: "🗡️",
        images: [
            "https://collectorsshop.ru/_next/image?url=https%3A%2F%2Fcollectorsshop.ru%2Fimg%2Fcatalog%2Fitems%2Fmain_images%2F2024%2F04%2F1896.png&w=1920&q=30",
            "https://collectorsshop.ru/_next/image?url=https%3A%2F%2Fcollectorsshop.ru%2Fimg%2Fcatalog%2Fitems%2Fmain_images%2F2024%2F07%2F3732.png&w=1920&q=30",
            "https://steamuserimages-a.akamaihd.net/ugc/92727554340479505/71530A985B1446CCD9883BF88D6660554A1A830B/?imw=512&amp;imh=430&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
        ]
    },
    {
        id: 2,
        name: "Immortal Pudge Hook",
        price: 1200,
        image: "https://avatars.mds.yandex.net/i?id=9d84a71fdf9e731b600fbc8327e030ad668346ac-9198174-images-thumbs&n=13",
        description: "Бессмертный крюк Pudge с кровавыми эффектами",
        fullDescription: "Бессмертный крюк для Pudge с уникальным кровавым эффектом.",
        rarity: "Immortal",
        hero: "Pudge",
        icon: "🪝",
        images: [
            "https://avatars.mds.yandex.net/i?id=1856bc0592b4e9595450f270d354b0bc95c303d4-10674688-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=63cb06e11638ff2b3dcc444df9e06de775da08c4-5655706-images-thumbs&n=13"
        ]
    },
    {
        id: 3,
        name: "Courier Baby Roshan",
        price: 120000,
        image: "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIa5zlm5VeSbwcujLESF6kV9u4X16ED1Tg75n5jf6SsCuc2iabZqJb7EXTaUlLcusudrHH_glB8m4Wjcyt36cX6VPwZ2WMZ3FOBbtRWxwdaxKaq8sIDx_5M4/330x192?allow_animated=1",
        description: "Эксклюзивный курьер Baby Roshan",
        fullDescription: "Эксклюзивный курьер Baby Roshan, выпущенный ограниченным тиражом на The International.",
        rarity: "Legendary",
        hero: "Courier",
        icon: "🐉",
        images: [
            "https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttydbPaERSR0Wqmu7LAocGIa5zlm5VeSbwcujLESF6kV9u4X16ED1Tg75n5jf8SNJ6PfgPPw4cfOVDWTJlex15rhqHyy1lEsisj7Tyt_9IimfbwYgWZJ5QrVcuw74zIPH8_CAZQ/330x192?allow_animated=1"
        ]
    },
    {
        id: 4,
        name: "Arcana Crystal Maiden",
        price: 3200,
        image: "https://collectorsshop.ru/_next/image?url=https%3A%2F%2Fcollectorsshop.ru%2Fimg%2Fcatalog%2Fitems%2Fmain_images%2F2020%2F01%2F220_1.jpeg&w=1920&q=30",
        description: "Arcana Crystal Maiden с ледяными эффектами",
        fullDescription: "Arcana для Crystal Maiden добавляет ледяной трон и новую собаку-компаньона.",
        rarity: "Arcana",
        hero: "Crystal Maiden",
        icon: "❄️",
        images: [
            "https://avatars.mds.yandex.net/i?id=4349f22ff7fb89900bd59936c7545b5ac48e1f37-3979407-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=40b125c45f4a8539577aa97617b23ef91665b4fe-13190676-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=c7fe153ab961c177f604b2582cbfc7a56e4196ef-4933643-images-thumbs&n=13"
        ]
    },
    {
        id: 5,
        name: "Dragonclaw Hook",
        price: 45000,
        image: "https://collectorsshop.ru/_next/image?url=https%3A%2F%2Fcollectorsshop.ru%2Fimg%2Fcatalog%2Fitems%2Fmain_images%2F2023%2F08%2F1059.png&w=1920&q=30",
        description: "Редчайший Dragonclaw Hook для Pudge",
        fullDescription: "Один из самых редких и дорогих предметов в Dota 2.",
        rarity: "Mythical",
        hero: "Pudge",
        icon: "🐲",
        images: [
            "https://avatars.mds.yandex.net/i?id=99a7caa5c584ed8b76998f5116d60106_l-3807181-images-thumbs&n=13"
        ]
    },
    {
        id: 6,
        name: "Arcana Zeus",
        price: 3800,
        image: "https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3b/Cosmetic_icon_Tempest_Helm_of_the_Thundergod.png",
        description: "Arcana Zeus с молниями",
        fullDescription: "Arcana для Zeus добавляет новые модели молний.",
        rarity: "Arcana",
        hero: "Zeus",
        icon: "⚡",
        images: [
            "https://avatars.mds.yandex.net/i?id=f39338417e55ed6eb418adb452c6a2836f3c841f-5877861-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=4a291bc85a961235b554bff0552cc67e8fdc8bc4-3948701-images-thumbs&n=13"
        ]
    },
    {
        id: 7,
        name: "Immortal Phantom Assassin",
        price: 1800,
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KW1Zwwo4NUX4oFJZEHLbXQ5BhMYY49vRpiRVjVStu_1tnWXVR6IjtAv7SiOEkzg6KaJGtEv4XnzYaOlvWnMrmFwTNT68Ynju_Fo46i3lHi80VtZ2zzOsbLJaRXozYK/256fx256f",
        description: "Бессмертные крылья для Phantom Assassin",
        fullDescription: "Бессмертные крылья для Phantom Assassin с уникальными эффектами. Добавляют новые частицы при использовании способности 'Удар призрака' и меняют иконку способности.",
        rarity: "Immortal",
        hero: "Phantom Assassin",
        icon: "🗡️",
        images: [
            "https://avatars.mds.yandex.net/i?id=7a96c95014015b1ec770cff894371f7a_l-4261957-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=4099dfe9808993d51a8e11cd5efff745_l-5232642-images-thumbs&n=13"
        ]
    },
    {
        id: 8,
        name: "Arcana Rubick",
        price: 4000,
        image: "https://collectorsshop.ru/_next/image?url=https%3A%2F%2Fcollectorsshop.ru%2Fimg%2Fcatalog%2Fitems%2Fmain_images%2F2020%2F01%2F225_1.png&w=1920&q=30",
        description: "Arcana Rubick с украденными эффектами заклинаний",
        fullDescription: "Arcana для Rubick добавляет уникальные эффекты к украденным заклинаниям. Каждая украденная способность получает золотую/зеленую цветовую гамму и особые частицы.",
        rarity: "Arcana",
        hero: "Rubick",
        icon: "🔮",
        images: [
            "https://avatars.mds.yandex.net/i?id=96d1f8c1a9f0e183278cfe50e2c8d2d6b6116c4d-11541841-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=b6b9b67a294d4aa52bbaded377494d1b040ae99c-5133450-images-thumbs&n=13"
        ]
    },
    {
        id: 9,
        name: "Mace of Aeons",
        price: 28000,
        image: "https://avatars.mds.yandex.net/i?id=9eba8303426aa7062a0b33b18e709923e99e24d0-5333646-images-thumbs&n=13",
        description: "Редчайшая булава Void из коллекции Summer 2016",
        fullDescription: "Эксклюзивная булава для Faceless Void из коллекции Summer 2016. Добавляет уникальные эффекты при использовании способности 'Хронополе' и имеет редкую анимацию.",
        rarity: "Legendary",
        hero: "Faceless Void",
        icon: "⏰",
        images: [
            "https://avatars.mds.yandex.net/i?id=52538b76263db0f5044706b7f5c44d52f546ccdc-7052560-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=9eb2567bd61f8a0355f6dc50c081abd3816bd7a0-2855894-images-thumbs&n=13",
            "https://avatars.mds.yandex.net/i?id=1809819780536532e904a26a907060e664b3b64f-4304379-images-thumbs&n=13"
        ]
    }
];

// Для каталога нужны все товары, включая дополнительные
const allProducts = products;
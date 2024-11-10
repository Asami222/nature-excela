const products = [
    
            {
                id: 'cream',
                title: "乳液＆クリーム",
                text: `ミネラル成分を豊富に含んだ肌に優しく柔らかな使い心地です。`,
                colors:[
                    {
                        id:1,
                        image: {
                            url: "/items/products/skin2.jpg",
                            alt: "保湿クリーム",
                            width: 317,
                            height: 251,
                            widthB: 100,
                            heightB: 80,
                        },
                        name: "ピュアクリーム",
                        price: 9900,
                    },
                ],
            
            },
            {
                id: 'cleansing',
                title: "クレンジング",
                text: `植物の浄化作用で汚れをすっきり落とし、強すぎない成分で肌の自然な油分を守ります。`,
                colors: [
                    {
                        id: 2,
                        image: {
                            url: "/items/products/skin3.jpg",
                            alt: "クレンジングクリーム",
                            width: 184,
                            height: 432,
                            widthB: 68,
                            heightB: 160,
                        },
                        name: "ディープクレンジングフォーム",
                        price: 5500,
                    },
                ],
            },
     
            {
                id: 'serum',
                title: "美容液",
                text: `自然のパワーをふんだんに取り入れたNATURE EXCELAが自信を持ってお勧めする他社にはない商品です。
使う毎により強く生まれ変わる肌を体験してください。`,
                colors:[
                        {
                        id: 3,
                        image: {
                            url: "/items/products/skin1.jpg",
                            alt: "美容液",
                            width: 170,
                            height: 542,
                            widthB: 44,
                            heightB: 136,
                        },
                        name: "マイクロセラム",
                        price: 12600,
                        },
                    ],
            },
            {
                id: 'shadow',
                title: "アイシャドウ",
                text: `美しく輝く大人の知的さを備えた目元を演出します。`,
                colors: [
                    {
                        id: 4,
                        image: {
                            url: "/items/products/shadow1.jpg",
                            alt: "アイシャドウ（茶）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "アイシャドウ（茶）",
                        price: 2800,
                        color: "#B98773",
                    },
                    {
                        id: 5,
                        image: {
                            url: "/items/products/shadow2.jpg",
                            alt: "アイシャドウ（桃）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "アイシャドウ（桃）",
                        price: 2800,
                        color: "#AB6194",
                    },
                    {
                        id: 6,
                        image: {
                            url: "/items/products/shadow3.jpg",
                            alt: "アイシャドウ（赤）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "アイシャドウ（赤）",
                        price: 2800,
                        color: "#B15D6D",
                    },
                ],
            },
            {
                id: 'palette',
                title: "アイパレット",
                text: `自然の力強い色からインスピレーションを得たバリエーションです。`,
                colors: [
                    {
                        id: 7,
                        image: {
                            url: "/items/products/palette1.jpg",
                            alt: "アイパレット（赤）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "アイパレット（赤）",
                        price: 3700,
                        color: "#C83A46",
                    },
                    {
                        id: 8,
                        image: {
                            url: "/items/products/palette2.jpg",
                            alt: "アイパレット（青）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "アイパレット（青）",
                        price: 3700,
                        color: "#3959C7",
                    },
                    {
                        id: 9,
                        image: {
                            url: "/items/products/palette3.jpg",
                            alt: "アイパレット（黄）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "アイパレット（黄）",
                        price: 3700,
                        color: "#FBE87E",
                    },
                ],
            },
            {
                id: 'mascara',
                title: "マスカラ",
                text: `汗や水で落ちにくく、滑りの良い描き心地と発色性の良さがあります。`,
                colors: [
                    {
                        id: 10,
                        image: {
                            url: "/items/products/mascara1.jpg",
                            alt: "マスカラ（黒）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 116,
                        },
                        name: "マスカラ（黒）",
                        price: 2800,
                        color: "#251C18",
                    },
                    {
                        id: 11,
                        image: {
                            url: "/items/products/mascara2.jpg",
                            alt: "マスカラ（黄）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 116,
                        },
                        name: "マスカラ（黄）",
                        price: 2800,
                        color: "#B2976D",
                    },
                    {
                        id: 12,
                        image: {
                            url: "/items/products/mascara3.jpg",
                            alt: "マスカラ（茶）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 116,
                        },
                        name: "マスカラ（茶）",
                        price: 2800,
                        color: "#5A4339",
                    },
                ],
            },
            {
                id: 'stick',
                title: "リップスティック",
                text: `汗や水で落ちにくく、滑りの良い描き心地と発色性の良さがあります。`,
                colors: [
                    {
                        id: 13,
                        image: {
                            url: "/items/products/rip1.jpg",
                            alt: "リップスティック（赤）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "リップスティック（赤）",
                        price: 3000,
                        color: "#DD4347",
                    },
                    {
                        id: 14,
                        image: {
                            url: "/items/products/rip2.jpg",
                            alt: "リップスティック（桜）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                        },
                        name: "リップスティック（桜）",
                        price: 3000,
                        color: "#E74E4F",
                    },
                    {
                        id: 15,
                        image: {
                            url: "/items/products/rip3.jpg",
                            alt: "リップスティック（黄）",
                            width: 398,
                            height: 385,
                            widthB: 120,
                            heightB: 114,
                            },
                            name: "リップスティック（黄）",
                            price: 3000,
                            color: "#F19A5C",
                    },
                ],
            },
            {
                id: 'new',
                title: "NEW PRODUCT",
                text: `真夏の特別価格！
どれも高品質のお値打ち品です。
在庫が無くなり次第販売終了します。
予約は受け付けておりません。`,
                colors:[
                    {
                        id: 16,
                        image: {
                            url: "/items/new/1.jpg",
                            alt: "新商品ルースパウダー",
                            width: 650,
                            height: 460,
                            widthB: 120,
                            heightB: 84,
                        },
                        date: "2024年8月10日",
                        name: "ルースパウダー",
                        price: 5500,
                    },
                    {
                        id: 17,
                        image: {
                            url: "/items/new/2.jpg",
                            alt: "新商品アイメイクパレットセット",
                            width: 650,
                            height: 460,
                            widthB: 120,
                            heightB: 84,
                        },
                        date: "2024年8月10日",
                        name: "アイメイクパレットセット",
                        price: 4400,
                    },
                    {
                        id: 18,
                        image: {
                            url: "/items/new/3.jpg",
                            alt: "新商品アイメイク筆セット",
                            width: 650,
                            height: 460,
                            widthB: 120,
                            heightB: 84,
                        },
                        date: "2024年8月25日",
                        name: "アイメイク筆セット",
                        price: 5500,
                    },
                    {
                        id: 19,
                        image: {
                            url: "/items/new/4.jpg",
                            alt: "新商品メイク筆専用収納ポーチ（本革）",
                            width: 650,
                            height: 460,
                            widthB: 120,
                            heightB: 84,
                        },
                        date: "2024年8月25日",
                        name: "メイク筆専用収納ポーチ（本革）",
                        price: 3500,
                        
                    },
                ],
            },
]

export default products;
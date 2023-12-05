const regions = [
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Белгородская область",
        "region_code": 16
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Кабардино-Балкария",
        "region_code": 78
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Омская область",
        "region_code": 15
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Пензенская область",
        "region_code": 69
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ленинградская область",
        "region_code": 26
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Бурятия",
        "region_code": 12
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Воронежская область",
        "region_code": 63
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ульяновская область",
        "region_code": 70
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Крым",
        "region_code": 90
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Башкортостан",
        "region_code": 27
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Мордовия",
        "region_code": 68
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Удмуртия",
        "region_code": 48
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Санкт-Петербург",
        "region_code": 82
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Коми",
        "region_code": 1
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ханты-Мансийский автономный округ - Югра",
        "region_code": 11
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Кировская область",
        "region_code": 44
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Калмыкия",
        "region_code": 46
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ненецкий автономный округ",
        "region_code": 77
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Курганская область",
        "region_code": 28
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Северная Осетия - Алания",
        "region_code": 79
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Калужская область",
        "region_code": 33
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Новосибирская область",
        "region_code": 23
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Мурманская область",
        "region_code": 43
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Камчатский край",
        "region_code": 55
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Новгородская область",
        "region_code": 31
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Алтайский край",
        "region_code": 2
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Байконур",
        "region_code": 1013
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Фиктивный",
        "region_code": 1021
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ставропольский край",
        "region_code": 19
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Рязанская область",
        "region_code": 41
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ростовская область",
        "region_code": 45
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Самарская область",
        "region_code": 57
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Карелия",
        "region_code": 73
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Татарстан",
        "region_code": 39
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Сахалинская область",
        "region_code": 20
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Чувашия",
        "region_code": 64
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Алтай",
        "region_code": 25
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Дагестан",
        "region_code": 21
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Челябинская область",
        "region_code": 3
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Астраханская область",
        "region_code": 34
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Нижегородская область",
        "region_code": 67
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Тульская область",
        "region_code": 37
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Волгоградская область",
        "region_code": 40
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Тамбовская область",
        "region_code": 58
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Амурская область",
        "region_code": 56
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Карачаево-Черкесия",
        "region_code": 80
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Магаданская область",
        "region_code": 59
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Калининградская область",
        "region_code": 38
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Еврейская автономная область",
        "region_code": 76
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Псковская область",
        "region_code": 30
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Оренбургская область",
        "region_code": 5
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Севастополь",
        "region_code": 975
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Липецкая область",
        "region_code": 60
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Свердловская область",
        "region_code": 24
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ярославская область",
        "region_code": 35
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Курская область",
        "region_code": 62
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Хабаровский край",
        "region_code": 14
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Архангельская область",
        "region_code": 66
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Тюменская область",
        "region_code": 52
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Забайкальский край",
        "region_code": 49
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ивановская область",
        "region_code": 8
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Пермский край",
        "region_code": 22
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Хакасия",
        "region_code": 74
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Смоленская область",
        "region_code": 65
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Орловская область",
        "region_code": 36
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Иркутская область",
        "region_code": 4
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Кемеровская область",
        "region_code": 54
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Краснодарский край",
        "region_code": 7
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Костромская область",
        "region_code": 42
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Чеченская Республика",
        "region_code": 71
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Томская область",
        "region_code": 53
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Красноярский край",
        "region_code": 13
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Адыгея",
        "region_code": 61
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Марий Эл",
        "region_code": 32
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ямало-Ненецкий автономный округ",
        "region_code": 6
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Саратовская область",
        "region_code": 47
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Тверская область",
        "region_code": 50
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Саха (Якутия)",
        "region_code": 10
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Республика Тыва",
        "region_code": 75
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Московская область",
        "region_code": 9
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Ингушетия",
        "region_code": 72
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Вологодская область",
        "region_code": 51
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Брянская область",
        "region_code": 29
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Чукотский автономный округ",
        "region_code": 83
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Владимирская область",
        "region_code": 17
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Приморский край",
        "region_code": 18
    },
    {
        "country_code": "RU",
        "country": "Россия",
        "region": "Москва",
        "region_code": 81
    }
]
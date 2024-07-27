import React, { createContext, useState } from "react";


export const StoreContext = createContext()

export function StoreContextProvider({children}){
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isModalVisibleTwo, setIsModalVisibleTwo] = useState(false)
    const [isModalVisibleThree, setIsModalVisibleThree] = useState(false)
    const [isModalVisibleFour, setIsModalVisibleFour] = useState(false)
    const [pressed, setPressed] = useState(true)
    const [nextEffect, setNextEffect] = useState(false)
    const [touched, setTouched] = useState('İlan Bilgileri')
    const [addCate, setAddCate] = useState([])
    const [optionsVisible, setOptionsVisible] = useState(false)
    const [ilanArray, setIlanArray] = useState([])
    const [odaSayısı, setOdaSayısı] = useState('')
    const [secimTitle, setSecimTitle] = useState('')
    const [binaYasi, setBinaYasi] = useState('')
    const [bulunduguKat, setBulunduguKat] = useState('')
    const [katSayisi, setKatSayisi] = useState('')
    const [isitma, setIsitma] = useState('')
    const [banyoSayısı, setBanyoSayısı] = useState('')
    const [balkon, setBalkon] = useState('')
    const [asansor, setAsansor] = useState('')
    const [otopark, setOtopark] = useState('')
    const [esyali, setEsyali] = useState('')
    const [kullanimDurumu, setKullanimDurumu] = useState('')
    const [krediyeUygun, setKrediyeUygun] = useState('')
    const [tapuDurumu, setTapuDurumu] = useState('')
    const [takasli, setTakasli] = useState('')
    const [kimden, setKimden] = useState('Sahibinden')
    const [ilanArrayAdd, setIlanArrayAdd] = useState([])
    const [sehir, setSehir] = useState('')
    const [adTitle, setAdTitle] = useState('')
    const [adDescription, setAdDescription] = useState('')
    const [price, setPrice] = useState('')
    const [brut, setBrut] = useState('')
    const [net, setNet] = useState('')
    const [aidat, setAidat] = useState('')

    const value = {
        isModalVisible,
        setIsModalVisible,
        pressed,
        setPressed,
        nextEffect,
        setNextEffect,
        isModalVisibleTwo,
        setIsModalVisibleTwo,
        touched,
        setTouched,
        addCate,
        setAddCate,
        setIsModalVisibleThree,
        setIsModalVisibleFour,
        isModalVisibleFour,
        isModalVisibleThree,
        optionsVisible,
        setOptionsVisible,
        ilanArray,
        setIlanArray,
        odaSayısı,
        setOdaSayısı,
        secimTitle,
        setSecimTitle,
        binaYasi,
        setBinaYasi,
        bulunduguKat,
        setBulunduguKat,
        katSayisi,
        setKatSayisi,
        isitma,
        setIsitma,
        banyoSayısı,
        setBanyoSayısı,
        balkon,
        setBalkon,
        asansor,
        setAsansor,
        otopark,
        setOtopark,
        esyali,
        setEsyali,
        kullanimDurumu,
        setKullanimDurumu,
        krediyeUygun,
        setKrediyeUygun,
        tapuDurumu,
        setTapuDurumu,
        takasli,
        setTakasli,
        kimden,
        setKimden,
        ilanArrayAdd,
        setIlanArray,
        sehir,
        setSehir,
        adTitle,
        setAdTitle,
        adDescription,
        setAdDescription,
        setPrice,
        price,
        brut,
        setBrut,
        net,
        setNet,
        aidat,
        setAidat,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
}
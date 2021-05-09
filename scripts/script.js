function codingTimer() {
    setInterval( () => {
        let startCodingDate = new Date("01-02-2019")
        let now = new Date()
        let difference = Math.floor((now.getTime() - startCodingDate.getTime())  / 60000)
        let intlNumberFormatter = new Intl.NumberFormat("en-GB")
        document.querySelector('#difference').innerHTML=String(intlNumberFormatter.format(difference))
    }, 1000)


}

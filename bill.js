function bills(){
    let Bat = document.getElementById('bat').value;
    let Ball = document.getElementById('ball').value;
    let Stump = document.getElementById('stump').value;

    let Batunit = document.getElementById('bat-unit').innerText;
    let result = Bat * Batunit;
    console.log(result);
    document.getElementById('bat-prize').innerHTML = result;

    let Ballunit = document.getElementById('ball-unit').innerText;
    let result2 = Ball * Ballunit;
    console.log(result2);
    document.getElementById('ball-prize').innerHTML = result2;

    let Stumpunit = document.getElementById('stump-unit').innerText;
    let result3 = Stump * Stumpunit;
    console.log(result3);
    document.getElementById('stump-prize').innerHTML = result3;

    // TOTAL

    let Total = result + result2 + result3;
    document.getElementById('total').innerHTML = Total;

    //TAX
    let Tax = (18/100) * Total;
    document.getElementById('tax').innerHTML = Tax;

    //GRANDTOTAL
    let Grandtotal = Total + Tax;
    document.getElementById('grand-total').innerHTML = Grandtotal;
}
function fentaprocess(){

    const weight = document.getElementById('weight').value
    const loadingDoseRate = document.getElementById('loadingDoseRate').value
  
    const weightxdose = weight * loadingDoseRate
    console.log(weightxdose)

    const loadingDose = weightxdose / 50
    var roundednumber = (Math.round(loadingDose * 100) / 100).toFixed(2);
    console.log(roundednumber)

// document.write(`<br><h3>Fentanyl's loading dose is ${roundednumber} ml</h3>`)
// document.close();

document.getElementById('result2').innerHTML = (`<h3>Loading dose is ${roundednumber} mls SLOW IV</h3>`)

}

function fentanylprocess(){
    const weight = document.getElementById('weight').value
    const dose_rate = document.getElementById('dose_rate').value
    const criDuration = document.getElementById('criDuration').value
    const syringeSize = document.getElementById('syringeSize')
 
    // 1. weight times duration times dose_rate
    // to calculate total drug
 
    const totalDrug = weight * criDuration * dose_rate
    console.log(totalDrug)

    // 2.  Calculate total volume in microgram by dividing 'totalDrug' by fixed 
    // drug concentration of 0.005 by 10,000 

   const totalVolume = (totalDrug / 0.005) / 10000
    console.log(totalVolume)

    // 3. Additional Saline
    // Deduct 'syringSize' from 'syringSize' 'totalVolume'

    syringeSizeValue = syringeSize.value

    const addSaline = syringeSizeValue - totalVolume
    console.log(addSaline)

    // 4. Final delivery = 'syringSizeValue' divided by 'criDuration'

    const finaldel = syringeSizeValue / criDuration
    console.log(finaldel)

    //  document.write(`<br><h3>The total volume of Fentanyl is ${totalVolume.toFixed(2)}ml. <br>
    //  The final delivery rate is ${finaldel.toFixed(2)}ml/hr.<br>
    //  Add ${addSaline.toFixed(2)}ml of saline to the syringe.`) 
    //  document.close();

     document.getElementById('result').innerHTML = (`<br><h3>The total volume of Fentanyl is ${totalVolume.toFixed(2)}ml. <br>
     The final delivery rate is ${finaldel.toFixed(2)}ml/hr.<br>
     Add ${addSaline.toFixed(2)}ml of saline to the syringe.`) 

}
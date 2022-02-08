



//ここからdiv#contents5のjsを書く
function calc5(weight, bfp) {
    const lean_value = document.getElementById('lean').value =
    Math.round((weight - (weight * (bfp / 100))) * 100) / 100;

    const cal_value = document.getElementById('cal').value =
    Math.round(lean_value * 40);

    const protein_value = document.getElementById('protein').value =
    Math.round(lean_value * 2);

    const fat_value = document.getElementById('fat').value =
    Math.round(lean_value * 0.9);

    const carbo_value = document.getElementById('carbo').value =
    Math.round((cal_value - (protein_value * 4) - (fat_value * 9)) / 4);
}
//ここまでdiv#contents5のjs


//ここからdiv#contents1のjsを書く
function calc1(amountMoney, tax) {
    const total_value = document.getElementById('total').value =
    Math.round(amountMoney * 1.1);
}
//ここまでdiv#contents1のjs


//ここからdiv#contents5のjsを書く
function calc2(amount_money1, discounted) {
    const after_value = document.getElementById('after').value =
    Math.round(amount_money1 * (1 - (discounted / 100)));
}
//ここまでdiv#contents5のjs


//ここからdiv#contents5のjsを書く
//ここまでdiv#contents5のjs
//ここからdiv#contents4のjsを書く
function calc4(body_height, body_weight) {
    const appro_value = document.getElementById('appro').value =
    Math.round((body_height / 100) * (body_height /100) *22);

    const yourBmi_value = document.getElementById('yourBmi').value =
    Math.round(body_weight / ((body_height /100) * (body_height /100)));
}
//ここまでdiv#contents4のjs
//ここからdiv#contents5のjsを書く
//ここまでdiv#contents5のjs
//ここからdiv#contents5のjsを書く
//ここまでdiv#contents5のjs
//ここからdiv#contents5のjsを書く
//ここまでdiv#contents5のjs

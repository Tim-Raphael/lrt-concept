extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn predict_value_at_target(dataset: Vec<f64>, target: f64) -> Vec<f64> {
    // Split the dataset into x and y values
    let (y_vals, x_vals): (Vec<f64>, Vec<f64>) =
        dataset.chunks(2).map(|chunk| (chunk[0], chunk[1])).unzip();

    // Perform simple linear regression
    let (slope, intercept) = linear_regression(&x_vals, &y_vals);

    vec![predict_value(target, slope, intercept), slope, intercept]
}

fn mean(data: &[f64]) -> f64 {
    let sum: f64 = data.iter().sum();
    sum / data.len() as f64
}

fn linear_regression(x_vals: &[f64], y_vals: &[f64]) -> (f64, f64) {
    // Calculate the means of x and y
    let x_mean = mean(&x_vals);
    let y_mean = mean(&y_vals);

    // Calculate the slope (m) and the intercept (b)
    let numerator: f64 = x_vals
        .iter()
        .zip(y_vals)
        .map(|(x, y)| (x - x_mean) * (y - y_mean))
        .sum();
    let denominator: f64 = x_vals.iter().map(|x| (x - x_mean).powi(2)).sum();

    let slope = numerator / denominator;
    let intercept = y_mean - slope * x_mean;

    (slope, intercept)
}

fn predict_value(target: f64, slope: f64, intercept: f64) -> f64 {
    slope * target + intercept
}

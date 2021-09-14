import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('modeljson/model.json');

const action = tf.fromPixels(webcamElement);  
const prediction = model.predict(action);
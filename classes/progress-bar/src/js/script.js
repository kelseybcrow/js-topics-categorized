import { ProgressBar } from './ProgressBar';

// @TODO no.1
//    create new object based on class ProgressBar.
//    The constructor does not need any parameter, but you should still explore constructor to check what properties there are.
//    Take html body element (document.body) and append progress bar element to it.
//    Progress bar element was created in the constructor of PB
//    and it is available as a property "element" of the object you created.
//
//    code here:
const progressBar1 = new ProgressBar();
document.body.appendChild(progressBar1.element);

const progressBar2 = new ProgressBar(1);
console.log(progressBar2);
document.body.appendChild(progressBar2.element);

// @TODO no.2 fix the bug
//    Once you have done TODO no.1 and you can see the progress bar,
//    fix missing icon on plus button

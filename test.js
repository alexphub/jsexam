/*# yesterday users list
 name, phone## 1, Hulk, 0541111111

1, Hulk, 0541111111           1. Hulk, 0541111111

2, Thor, 0542222222           3, Timon, 0543333333
3, Timon, 0543333333          4, Pumbaa, 0544444444
4, Pumbaa, 0544444444         5, Groot, 0545555555
6, Starlord, 0546666666##

** The list is sorted
line = get_next_line(file_name)
act as Iterator (return null if empty)
*/

    function get_next_line(file_name) {
        return null;//
    }

    function readDada(file_name_1, file_name_2) {

        let line1 = get_next_line(file_name_1);
        let line2 = get_next_line(file_name_2);

        while (line1 != null && line2 != null) {

            if (line2 == line2) {
                // identical
                continue;
            }

            let obj1 = line1.split(',');
            let obj2 = line2.split(',');

            // if index of line2 > line1
            if (obj2[0] > obj1[0]) {
                console.log('entry deleted: ', obj1[0]);
            } else {
                // if index of line1 > line12
                console.log('entry add: ', obj2[0]);
            }
        }

        do {

            if (line1 !== null) {
                let obj1 = line1.split(',');
                console.log('entry deleted: ', obj1[0]);
            } else {
                if (line2 != null) {
                    let obj2 = line2.split(',');
                    console.log('entry add: ', obj2[0]);
                }
            }

            if (line1) {
                line1 = get_next_line(file_name_1);
            }

            if (line2) {
                line2 = get_next_line(file_name_2);
            }

        } while (line1 != null || line2 != null);

    }
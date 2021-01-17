import _ from 'lodash';
export default function (data, pageNumber, pageSize) {
    const index = (pageNumber - 1) * pageSize;
    return _(data).slice(index).take(pageSize).value();
}
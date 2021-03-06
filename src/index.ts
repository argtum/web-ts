import { UserEdit } from './views/UserEdit';
import { User }     from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 })
const root = document.querySelector(`#root`);

if (root) {
    const userEdit = new UserEdit(root, user);

    userEdit.render();
} else {
    throw new Error('Root element not fount');
}
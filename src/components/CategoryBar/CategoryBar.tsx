import classes from "./categorybar.module.css";

const CategoryBar = () => {
  return (
    <div className="relative bg-gray-80 border-2 mb-10">
      <nav className={`${classes.nav} border-4 border-green-600 bg-red-600`}>
        <ul>
          <li className={`${classes.dropdown} bg-red-600`}>
            <a href="">
              File<span>&rsaquo;</span>
            </a>
            <ul>
              <li className={`${classes.dropdown_two}`}>
                <a href="">
                  New File<span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="">Link 1</a>
                  </li>
                  <li>
                    <a href="">Link 2</a>
                  </li>
                  <li>
                    <a href="">Link 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Open File</a>
              </li>
              <li>
                <a href="">open folder</a>
              </li>
              <li>
                <a href="">save</a>
              </li>
            </ul>
          </li>
          <li className={`${classes.dropdown} bg-red-200`}>
            <a href="">
              Edit<span>&rsaquo;</span>
            </a>
            <ul>
              <li className={`${classes.dropdown_two}`}>
                <a href="">
                  New File<span>&rsaquo;</span>
                </a>
                <ul>
                  <li>
                    <a href="">Link 1</a>
                  </li>
                  <li>
                    <a href="">Link 2</a>
                  </li>
                  <li>
                    <a href="">Link 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Open File</a>
              </li>
              <li>
                <a href="">open folder</a>
              </li>
              <li>
                <a href="">save</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Section</a>
          </li>
          <li>
            <a href="">Tools</a>
          </li>
          <li>
            <a href="">View</a>
          </li>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CategoryBar;

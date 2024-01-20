import { categories } from "./categories";
import classes from "./categorybar.module.css";

const CategoryBar = () => {
  return (
    <div className="relative bg-gray-80 border-2 mb-10">
      <nav className={`${classes.nav} border-4 border-green-600 bg-red-600`}>
        <ul>
          {categories.map((category, i) => {
            return (
              <li key={i} className={`${classes.dropdown} bg-red-600`}>
                <a href="">
                  {category.category}
                  <span>&rsaquo;</span>
                </a>
                <ul>
                  {category.subcategories.map((subcategory, i) => {
                    {
                      console.log(subcategory,"subcategory");
                    }
                    return ( 
                      <li className={`${classes.dropdown_two}`}>
                        <a href="">
                          {subcategory.name} sd
                          <span>&rsaquo;</span>
                        </a>
                        <ul>
                          {subcategory.dblSubCat?.map((value,i)=>{
                            return (
                              <li key={i}>{value.name}</li>
                            )
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryBar;

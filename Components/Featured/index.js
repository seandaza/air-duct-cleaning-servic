import style from './style.module.css'

export default function featured() {

  const itemFeatured = [
      {
          id: 1,
          image: <i class="fa-solid fa-snowplow"></i>,
          title: "WHY CLEAN HVAC SYSTEM FREQUENTLY?",
          text: "Air ducts allow air to circulate heat and cooling systems throughout the home, keeping it comfortable and can also collect particles of dust, pollen, mold and other debris. Once you turn on the HVAC system, it recirculates the contaminants.Therefore, if not maintained properly, they can cause severe respiratory diseases."
      },
      {
          id: 2,
          image: <i class="fa-solid fa-soap"></i>,
          title: "HEALTH EFFECTS FROM INDOOR AIR POLLUTANTS",
          text: "Include: Irritation of the eyes, nose, and throat. Headaches, dizziness, fatigue, and heart disease, Respiratory diseases - pneumonia caused by exposure to the Legionella bacterium, lung cancer caused by exposure to Radon - Also—dust mites, mold, pet dander, environmental tobacco smoke, cockroach allergens, particulate matter, and others—are “asthma triggers."
      },
      {
          id: 3,
          image: <i class="fa-solid fa-spray-can-sparkles"></i>,
          title: "AIR DUCT CLEANING",
          text: "Our air duct cleaning service can help improve the air quality inside your home, while increasing the efficiency of your heating and air conditioning equipment. Our cleaning methods focus on the removal and prevention of odorous microorganisms, as well as those associated with the growth of mold and bacteria."
      },
      {
          id: 4,
          image: <i class="fa-solid fa-broom"></i>,
          title: "DRYER VENT CLEANING ",
          text: "Our dryer vent cleaning services focus on removing lint, debris, and obstructions to ensure proper airflow. You may also notice a big difference in your clothing, utility bills and laundry routine, preventing fires and other hazards to your health and property."
      },
      {
          id: 5,
          image: <i class="fa-solid fa-spray-can-sparkles"></i>,
          title: "CHIMNEY SWEEP",
          text: "Keeping your chimney clean is essential to the safety of your home. Our services include Removal of soot and creosote deposits. Clean the smoke chamber. Vacuum the combustion chamber. We use our specialized brushes to clean the combustion chamber of any debris and then take a closer look at the condition of each part of this system."
      },
      {
          id: 6,
          image: <i class="fa-solid fa-hand-sparkles"></i>,
          title: "ADVICE",
          text: "A good rule of thumb is to have your dryer venting and air duct cleaning done at the same time and to be aware of the amount of debris and odors coming up your chimney."
      },
  ] 

  return (
    <div className={style.featured} id="featured">
        {
            itemFeatured.map((item )=> (
                <div className={style.box_feature} key={item.id}>
                    {item.image}
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))
        }
    </div>
  )
}
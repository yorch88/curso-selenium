from time import sleep  
from selenium import webdriver
from selenium.webdriver.chrome.options import Options as ChromeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def create_driver():
  options = ChromeOptions()
  #options.add_argument("--headless=new")
  options.add_argument("--no-sandbox")
  options.add_argument("--disable-dev-shm-usage")

  driver = webdriver.Remote(
    command_executor="http://selenium:4444/wd/hub",
    options=options,
  )
  driver.set_window_size(1280, 800)
  return driver


def test_login_and_dashboard():
  driver = create_driver()
  wait = WebDriverWait(driver, 20)

  try:
    # 1) Ir al login de nuestro frontend
    driver.get("http://frontend:3000/")
    # ---- DEBUG AQUÍ ----
    # print("\n========== DEBUG DE PÁGINA ==========")
    # print("URL actual:", driver.current_url)
    # print("Primeros 500 chars del HTML:")
    # print(driver.page_source[:500])
    # print("=====================================\n")
    # -----------------------
    email = wait.until(EC.visibility_of_element_located((By.ID, "email")))
    password = driver.find_element(By.ID, "password")
    submit = driver.find_element(By.ID, "login-submit")

    email.send_keys("admin@example.com")
    sleep(2)
    password.send_keys("123456")
    sleep(2)
    submit.click()
    sleep(2)

    # 2) Verificar mensaje de éxito
    success = wait.until(
      EC.visibility_of_element_located((By.ID, "login-success"))
    )
    print("Mensaje de login:", success.text)

    # 3) Navegar al dashboard usando el botón del header
    nav_dashboard = driver.find_element(By.ID, "nav-dashboard")
    nav_dashboard.click()
    sleep(2)

    # 4) Interactuar con el contador
    counter_value = wait.until(
      EC.visibility_of_element_located((By.CSS_SELECTOR, "[data-testid='counter-value']"))
    )
    btn_inc = driver.find_element(By.ID, "counter-inc")
    btn_inc.click()
    sleep(2)
    btn_inc.click()
    sleep(2)
    print("Valor del contador después de 2 clics:", counter_value.text)

    # 5) Capturar texto dinámico (notificación retardada)
    notification = wait.until(
      EC.visibility_of_element_located((By.ID, "notification-text"))
    )
    print("Notificación dinámica:", notification.text)
    # 6) Trabajar con la lista dinámica
    add_btn = driver.find_element(By.ID, "btn-add-item")
    add_btn.click()
    sleep(2)
    add_btn.click()
    sleep(2)

    items = driver.find_elements(By.CSS_SELECTOR, "#items-list .list-item")
    print("Número de elementos en la lista:", len(items))

  finally:
    driver.quit()


if __name__ == "__main__":
  test_login_and_dashboard()

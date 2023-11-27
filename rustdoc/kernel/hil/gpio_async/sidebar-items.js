initSidebarItems({"trait":[["Client","The gpio_async Client interface is used to both receive callbacks when a configuration command finishes and to handle interrupt events from pins with interrupts enabled."],["Port","Interface for banks of asynchronous GPIO pins. GPIO pins are asynchronous when there is an asynchronous interface used to control them. The most common example is when using a GPIO extender on an I2C or SPI bus. With asynchronous GPIO functions, every config action results in an eventual callback function that indicates that the configuration has finished (unless the initial function call returns an error code, then no callback will be generated)."]]});
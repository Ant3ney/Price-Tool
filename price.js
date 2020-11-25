/*
    The following code manages the price tool logic. 
    
    The defininng category and service data region will change the price, name, description, or header of each service. 

    The category button functionalityregion is in charge of displaying the correct service info depending on the selected category

    The price functionality region is incharge of updating the price container and the service quantity's
*/
//#region Defining category function constructer
    function Service(initial){
        if(initial){
            this.name = initial.name;
            this.descriptionHeader = initial.descriptionHeader;
            this.description = initial.description;
            this.quantity = initial.quantity;
            this.price = initial.price;
            this.onPress = initial.onPress;
        }
        this.getName = () => {
            return this.name;
        }
        this.setName = (name) => {
            this.name = name;
        }
        this.getDescriptionHeader = () => {
            return this.descriptionHeader;
        }
        this.setDescriptionHeader = (descriptionHeader) => {
            this.descriptionHeader = descriptionHeader;
        }
        this.getDescription = () => {
            return this.description;
        }
        this.setDescription = (description) => {
            this.description = description;
        }
        this.getQuantity = () => {
            return this.quantity;
        }
        this.setQuantity = (quantity) => {
            this.quantity = quantity
        }
        this.getPrice = () => {
            return this.price;
        }
        this.setPrice = (price) => {
            this.price = price;
        }
        //Consider removing onPress Functions
        this.runOnPress = () => {
            this.onPress();
        }
        this.setOnPress = (onPress) => {
            this.onPress = onPress;
        }
    }
    function Category(initial){
        if(initial){
            this.name = initial.name;
            this.services = initial.services;
        }
        this.getName = () => {
            return this.name;
        }
        this.setName = (name) => {
            this.name = name;
        }
        this.getAllServices = () => {
            return this.services;
        }
        this.setAllServices = (allServices) => {
            this.services = allServices;
        }
        this.getService = (i) => {
            return this.services[i];
        }
        this.setService = (service, i) => {
            this.services[i] = service;
        }
    }
//#endregion
//#region Defining category and service data
    var allCategorys = [];
    var wallCeilingCoveringCategory = new Category({
        name: 'Wall / Ceiling Covering',
        services: [
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 01',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 02',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 03',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 04',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 05',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 06',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 07',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            }),
            new Service({
                name: 'Wall / Ceiling Covering item placeholder 08',
                descriptionHeader: 'Ceiling Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 60
            })
        ],
    })
    var carpentryCategory = new Category({
        name: 'Carpentry',
        services: [
            new Service({
                name: 'Carpentry item placeholder 01',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            }),
            new Service({
                name: 'Carpentry item placeholder 02',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            }),
            new Service({
                name: 'Carpentry item placeholder 03',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Carpentry item placeholder 04',
                descriptionHeader: 'Carpentry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 650
            })
        ]
    });
    var plasterboardInsulationCategory = new Category({
        name: 'Plasterboard insulation',
        services: [
            new Service({
                name: 'Plasterboard insulation item placeholder 01',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 140
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 02',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 03',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 600
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 04',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 320
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 05',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Plasterboard insulation item placeholder 06',
                descriptionHeader: 'Plasterboard Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            })
        ]
    });
    var flooringCategory = new Category({
        name: 'Flooring',
        services: [
            new Service({
                name: 'Flooring item placeholder 01',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Flooring item placeholder 02',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Flooring item placeholder 03',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Flooring item placeholder 04',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 120
            }),
            new Service({
                name: 'Flooring item placeholder 05',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 500
            }),
            new Service({
                name: 'Flooring item placeholder 06',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 100
            }),
            new Service({
                name: 'Flooring item placeholder 07',
                descriptionHeader: 'Flooring Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            })
        ]
    });
    var plumbingCategory = new Category({
        name: 'Plumbing',
        services: [
            new Service({
                name: 'Plumbing item placeholder 01',
                descriptionHeader: 'Plumbing Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Plumbing item placeholder 02',
                descriptionHeader: 'Plumbing Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Plumbing item placeholder 03',
                descriptionHeader: 'Plumbing Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            })
        ]
    });
    var electricityCategory = new Category({
        name: 'Electricity',
        services: [
            new Service({
                name: 'Electricity item placeholder 01',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Electricity item placeholder 02',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            }),
            new Service({
                name: 'Electricity item placeholder 03',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 2000
            }),
            new Service({
                name: 'Electricity item placeholder 04',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Electricity item placeholder 05',
                descriptionHeader: 'Electricity Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            })
        ]
    });
    var masonryCategory = new Category({
        name: 'Masonry',
        services: [
            new Service({
                name: 'Masonry item placeholder 01',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 100
            }),
            new Service({
                name: 'Masonry item placeholder 02',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 200
            }),
            new Service({
                name: 'Masonry item placeholder 03',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Masonry item placeholder 04',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Masonry item placeholder 05',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            }),
            new Service({
                name: 'Masonry item placeholder 06',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 250
            }),
            new Service({
                name: 'Masonry item placeholder 07',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 600
            }),
            new Service({
                name: 'Masonry item placeholder 08',
                descriptionHeader: 'Masonry Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 400
            })
        ]
    });
    var heatingAirConditioningCategory = new Category({
        name: 'Heating and air conditioning',
        services: [
            new Service({
                name: 'Heating and air conditioning item placeholder 01',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 150
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 02',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 300
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 03',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 450
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 04',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 50
            }),
            new Service({
                name: 'Heating and air conditioning item placeholder 05',
                descriptionHeader: 'Air conditioning Repair',
                description: 'Vestibulum imperdiet consequat hendrerit. Nunc tortor risus, facilisis efficitur elit ut, malesuada lobortis erat. Quisque laoreet interdum elementum. Sed eget sagittis sem.',
                quantity: 0,
                price: 500
            })
        ]
    });
    allCategorys = [
        wallCeilingCoveringCategory,
        carpentryCategory,
        plasterboardInsulationCategory,
        flooringCategory,
        plumbingCategory,
        electricityCategory,
        masonryCategory,
        heatingAirConditioningCategory
    ]
//#endregion
//#region Category button functionality
    //#region Finding all categroy buttons
        var allCategoryButtons = document.getElementsByClassName('category-cube');
        var wallCeilingCoveringButton = allCategoryButtons[0];
        var carpentryButton = allCategoryButtons[1];
        var plasterboardInsulationButton = allCategoryButtons[2];
        var flooringButton = allCategoryButtons[3];
        var plumbingButton = allCategoryButtons[4];
        var electricityButton = allCategoryButtons[5];
        var masonryButton = allCategoryButtons[6];
        var heatingAirConditioningButton = allCategoryButtons[7];
    //#endregion
    //#region Finding service elements
        var allServiceNames = document.getElementsByClassName('pTool-service-text-name');
        var allServiceHeaderDescriptions = document.getElementsByClassName('pTool-service-description-header');
        var allServiceDescriptions = document.getElementsByClassName('pTool-service-text-description');
        var allServiceQuantities = document.getElementsByClassName('pTool-quantity-input');
        var allServicePrices = document.getElementsByClassName('pTool-service-price-text');
    //#endregion
     var allServiceContainers = document.getElementsByClassName('pTool-service-container');
     var currentCategory;
    //#region click functions
        for(let i = 0; i < allCategoryButtons.length; i++){
            allCategoryButtons[i].addEventListener('click', () => {
                var ele = allCategoryButtons[i];
                addSelectedToElement(ele);
                hideAllServices();
            });
        }
        wallCeilingCoveringButton.addEventListener('click', () => {
            updateServiceContainers(wallCeilingCoveringCategory)
        });
        carpentryButton.addEventListener('click', () => {
            updateServiceContainers(carpentryCategory);
        });
        plasterboardInsulationButton.addEventListener('click', () => {
            updateServiceContainers(plasterboardInsulationCategory);
        });
        flooringButton.addEventListener('click', () => {
            updateServiceContainers(flooringCategory);
        });
        plumbingButton.addEventListener('click', () => {
            updateServiceContainers(plumbingCategory);
        });
        electricityButton.addEventListener('click', () => {
            updateServiceContainers(electricityCategory);
        });
        masonryButton.addEventListener('click', () => {
            updateServiceContainers(masonryCategory);
        });
        heatingAirConditioningButton.addEventListener('click', () => {
            updateServiceContainers(heatingAirConditioningCategory);
        });
    //#endregion
    //#region helper functions
        function updateServiceContainers(servaceCategory){
            currentCategory = servaceCategory;
            var allServies = servaceCategory.getAllServices();
            var serviceLength = allServies.length;
            for(var i = 0; i < serviceLength; i++){
                showService(i);
                allServiceNames[i].innerText = allServies[i].getName();
                allServiceHeaderDescriptions[i].innerText = allServies[i].getDescriptionHeader();
                allServiceDescriptions[i].innerText = allServies[i].getDescription();
                allServiceQuantities[i].value = allServies[i].getQuantity();
                allServicePrices[i].innerText = ('$' + allServies[i].getPrice());
            }
        }
        function removeSelectedFromAllCategorys(){
            for(var i = 0; i < allCategoryButtons.length; i++){
                allCategoryButtons[i].classList.remove('pTool-selected-cube');
            }
        }
        function addSelectedToElement(ele){
            if(!ele.classList.contains('pTool-selected-cube')){
                removeSelectedFromAllCategorys();
                ele.classList.add('pTool-selected-cube');
            }
        }
        function hideAllServices(){
            for(var i = 0; i < allServiceContainers.length; i++){
                if(!allServiceContainers[i].classList.contains('display-none')){
                    allServiceContainers[i].classList.add('display-none');
                }
            }
        }
        function showService(n){
            if(allServiceContainers[n].classList.contains('display-none')){
                allServiceContainers[n].classList.remove('display-none');
            }
        }
    //#endregion
//#endregion
//#region Price functionality
    var subTotalEle = document.querySelector('.pTool-subTotal-dollars');
    var taxEle = document.querySelector('.pTool-tax-dollars');
    var totalEle = document.querySelector('.pTool-total-dollars');
    //#region On quantity change listeners
    for(let i = 0; i < allServiceQuantities.length; i++){
        let quantityEle = allServiceQuantities[i];
        quantityEle.addEventListener('change', () => {
            var serviceIndex = getIndexOfQuantity(quantityEle);
            updateQuantity(serviceIndex, quantityEle.value);
            updatePriceContainer();
        })
    }
    //#endregion
    //#region Helper functions
        function updateQuantity(serviceIndex, amount){
            currentCategory.getAllServices()[serviceIndex].setQuantity(amount);
        }
        function getIndexOfElement(ele){
            index = Math.floor([...ele.parentElement.childNodes].indexOf(ele) / 2);
            return index;
        }
        function getIndexOfQuantity(ele){
            var serviceContainerEle = ele.parentElement.parentElement;
            return getIndexOfElement(serviceContainerEle);
        }
        function getSubTotalPrice(){
            var subTotal = 0;
            allCategorys.forEach(category => {
                category.getAllServices().forEach(service => {
                    var addOnPrice = service.getQuantity() * service.getPrice();
                    subTotal += addOnPrice;
                });
            });

            return subTotal;
        }
        function getTax(subTotal, tax){
            tax = tax || 0.2;
            var taxCost = Math.round(subTotal * tax);
            return taxCost;
        }
        function getTotalPrice(subTotal, tax){
            return (subTotal + tax);
        }
        function updatePriceContainer(){
            var subTotal = getSubTotalPrice();
            var tax = getTax(subTotal);
            var total = getTotalPrice(subTotal, tax);

            subTotalEle.innerText = ('$' + subTotal);
            taxEle.innerText = ('$' + tax);
            totalEle.innerText = ('$' + total);
        }   
    //#endregion
//#endregion

//Init HTML
(function(){
    updateServiceContainers(wallCeilingCoveringCategory);
    updatePriceContainer()
})();
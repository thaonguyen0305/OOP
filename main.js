 /*let Circle = function(radius) {
            this.radius = radius;

            this.getRadius = function() {
                return radius;
            }

            this.getArea = function() {
                return Math.PI * radius * radius;
            }
        };

        let circle = new Circle(2);
        let area = circle.getArea();

        console.log("Diện tích hình tròn là : " + area);*/

        class Circle{
            radius;
        
            constructor(radius) {
                this.radius = radius;
            }

            getDiameter(){
                return Math.PI * this.radius * 2;
            }
            getArea() {
                return Math.PI * this.radius * this.radius;
            } 

        }
        
        let circle = new Circle(2)
        let area = circle.getArea();
        let dia = circle.getDiameter();

        console.log("Chu vi hình tròn là : " + dia);
        console.log("Diện tích hình tròn là : " + area);


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  name: string;
  icon: string;
  pricePerK: number;
  color: string;
}

const services: Service[] = [
  { id: 'instagram', name: 'Instagram', icon: 'Instagram', pricePerK: 50, color: 'bg-pink-500' },
  { id: 'tiktok', name: 'TikTok', icon: 'Video', pricePerK: 40, color: 'bg-black' },
  { id: 'youtube', name: 'YouTube', icon: 'Play', pricePerK: 80, color: 'bg-red-500' },
  { id: 'telegram', name: 'Telegram', icon: 'Send', pricePerK: 30, color: 'bg-blue-500' },
  { id: 'twitter', name: 'Twitter', icon: 'Twitter', pricePerK: 60, color: 'bg-sky-500' },
  { id: 'vk', name: 'ВКонтакте', icon: 'Users', pricePerK: 35, color: 'bg-indigo-500' }
];

const Index = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [followers, setFollowers] = useState<number>(1000);
  const [isCalculating, setIsCalculating] = useState(false);

  const selectedServiceData = services.find(s => s.id === selectedService);
  const totalPrice = selectedServiceData ? (followers / 1000) * selectedServiceData.pricePerK : 0;

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="gradient-bg absolute inset-0 opacity-10"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border">
              <Icon name="Zap" size={20} className="text-primary" />
              <span className="text-sm font-medium">100% Бесплатная накрутка</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Бесплатная накрутка
              <br />
              подписчиков
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Увеличьте популярность ваших аккаунтов в социальных сетях. 
              Быстро, безопасно и совершенно бесплатно.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Shield" size={16} className="mr-2" />
                Безопасно
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Clock" size={16} className="mr-2" />
                Быстро
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Icon name="Gift" size={16} className="mr-2" />
                Бесплатно
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Поддерживаемые платформы</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="hover-scale cursor-pointer border-2 transition-all duration-200 hover:border-primary"
                onClick={() => setSelectedService(service.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={service.icon as any} size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">{service.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {service.pricePerK}₽/1k
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-2xl font-bold">Оформить заказ</CardTitle>
                <p className="text-muted-foreground">Выберите платформу и количество подписчиков</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service">Социальная сеть</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите платформу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          <div className="flex items-center gap-2">
                            <div className={`w-4 h-4 ${service.color} rounded-full`}></div>
                            {service.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="followers">Количество подписчиков</Label>
                  <Input
                    id="followers"
                    type="number"
                    value={followers}
                    onChange={(e) => setFollowers(Number(e.target.value))}
                    min="100"
                    max="50000"
                    step="100"
                  />
                  <p className="text-sm text-muted-foreground">От 100 до 50,000 подписчиков</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Ссылка на профиль</Label>
                  <Input
                    id="username"
                    placeholder="https://instagram.com/username"
                    className="font-mono text-sm"
                  />
                </div>

                {/* Price Calculator */}
                {selectedServiceData && (
                  <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Стоимость заказа</p>
                          <p className="text-2xl font-bold text-primary">
                            {isCalculating ? (
                              <Icon name="Loader2" size={24} className="animate-spin" />
                            ) : (
                              `${totalPrice.toFixed(0)}₽`
                            )}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Экономия</p>
                          <p className="text-lg font-semibold text-accent">
                            {(totalPrice * 0.7).toFixed(0)}₽
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Button 
                  className="w-full gradient-bg text-white font-semibold py-6 text-lg hover-scale"
                  onClick={handleCalculate}
                  disabled={!selectedService || !followers}
                >
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать накрутку бесплатно
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с условиями использования
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Мгновенный старт</h3>
                <p className="text-muted-foreground">
                  Накрутка начинается сразу после оформления заказа
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Полная безопасность</h3>
                <p className="text-muted-foreground">
                  Мы не запрашиваем пароли и личные данные
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-scale">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="TrendingUp" size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Живые подписчики</h3>
                <p className="text-muted-foreground">
                  Только реальные аккаунты активных пользователей
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;